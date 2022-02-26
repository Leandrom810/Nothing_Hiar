#import psycopg2 NÃO FUNCIONA OAKFDAODSKFGSPDAOK
from bottle import route, run, request

DSN = 'dbname=email_sender user=postgres host=db'
SQL = 'INSERT INTO emails (title, message) VALUES (%s, %s)'

def register_message(title, message):
    connection = psycopg2.connect(DSN)
    cursor = connection.cursor()
    cursor.execute(SQL, (title, message))
    connection.commit()
    cursor.close()
    connection.close()
    print("Message Registered.")


@route('/', method='POST')
def send():
    title = request.forms.get('title')
    message = request.forms.get('message')
    return "Mensagem Enfileirada! Assunto: {} Mensagem: {}".format(
        title, message
    )
if __name__ == '__main__':
    run(host='0.0.0.0', port=25565, debug=True)