import link_bio.constans as ct
from .TwitchAPI import TwitchAPI

TWITCH_API = TwitchAPI()

async def repo() -> str:
    return ct.REPO_URL

async def live(user:str) -> dict:
    return TWITCH_API.live(user)