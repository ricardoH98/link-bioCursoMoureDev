import reflex as rx
from link_bio.api.api import live

USER = "mouredev"

class PageState(rx.State):

    is_live: bool
    live_title: str

    async def check_live(self):
        live_data: dict = await live(USER)
        self.is_live = live_data["live"] # La función live es asíncrona, así que se debe usar await para indicar que se espera el return. Además debemos indicar self.is_live para darle valor a esta propiedad de clase IndexState
        self.live_title =  live_data["title"]


