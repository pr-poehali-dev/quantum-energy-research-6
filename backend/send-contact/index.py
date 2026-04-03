import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка сообщения с формы обратной связи на email администратора."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    try:
        raw_body = event.get('body', '{}')
        body = json.loads(raw_body) if isinstance(raw_body, str) else (raw_body or {})
    except Exception:
        return {'statusCode': 400, 'headers': cors_headers, 'body': {'error': 'Invalid JSON'}}

    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {'statusCode': 400, 'headers': cors_headers, 'body': {'error': 'Заполните все поля'}}

    contact_email = os.environ.get('CONTACT_EMAIL', '')
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новое сообщение с сайта от {name}'
    msg['From'] = smtp_user if smtp_user else contact_email
    msg['To'] = contact_email
    msg['Reply-To'] = email

    html_body = f"""
    <html><body style="font-family: Arial, sans-serif; color: #222; max-width: 600px;">
      <h2 style="color: #8B1A1A;">Новое сообщение с сайта «Единство народов России»</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:8px; font-weight:bold; width:120px;">Имя:</td><td style="padding:8px;">{name}</td></tr>
        <tr style="background:#f9f5f0;"><td style="padding:8px; font-weight:bold;">Email:</td><td style="padding:8px;"><a href="mailto:{email}">{email}</a></td></tr>
        <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Сообщение:</td><td style="padding:8px;">{message.replace(chr(10), '<br>')}</td></tr>
      </table>
    </body></html>
    """

    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    if smtp_user and smtp_password:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(msg['From'], [contact_email], msg.as_string())

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': {'ok': True}
    }
