import requests


def hae_chuck_norris_vitsi():
    try:
        vastaus = requests.get('https://api.chucknorris.io/jokes/random')
        vastaus.raise_for_status()

        vitsi = vastaus.json()['value']
        return vitsi

    except requests.exceptions.RequestException as e:
        return f"Virhe vitsiä haettaessa: {e}"


if __name__ == "__main__":
    print("Tässä satunnainen Chuck Norris -vitsi:")
    print(hae_chuck_norris_vitsi())