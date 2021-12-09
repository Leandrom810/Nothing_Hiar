from bottle import route, run, request

@route('/', method='POST')
def send():
    title = request.forms.get('title')
    message = request.forms.get('message')
    return "Mensagem Enfileirada! Assunto: {} Mensagem: {}".format(
        title, message
    )
if __name__ == '__main__':
    run(host='0.0.0.0', port=25565, debug=True)