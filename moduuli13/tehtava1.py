from flask import Flask, jsonify

app = Flask(__name__)

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    w = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += w
        w = 6 - w
    return True

@app.route('/alkuluku/<int:number>', methods=['GET'])
def check_prime(number):
    return jsonify({
        "Number": number,
        "isPrime": is_prime(number)
    })

if __name__ == '__main__':
    app.run(port=3000, debug=True)