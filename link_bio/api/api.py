import link_bio.constans as ct
from .TwitchAPI import TwitchAPI
from .SupabaseAPI import SupabaseAPI
from .ConfigCatAPI import ConfigCatAPI
from link_bio.model.Live import Live
from link_bio.model.Featured import Featured

TWITCH_API = TwitchAPI()
SUPABASE_API = SupabaseAPI()
CONFIFCAT_API = ConfigCatAPI()

async def repo() -> str:
    return ct.REPO_URL

async def live(user:str) -> Live:
    return TWITCH_API.live(user)

# Esta api no es pública
async def featured() -> list[Featured]:
    return SUPABASE_API.featured()

async def schedule() -> dict:
    return CONFIFCAT_API.schedule()