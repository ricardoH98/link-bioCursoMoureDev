import reflex as rx
import link_bio.constans as ct
from link_bio.components.title import title
from link_bio.components.link_sponsor import link_sponsor

def sponsors() -> rx.Component:
    return rx.vstack(
        title('Colaboran','8'),
        rx.grid(
            link_sponsor(
                "elgato.png",
                ct.ELGATO_URL,
                'Logotipo de el gato'
            ),
            link_sponsor(
                "mvp.png",
                ct.MVP_URL,
                'Logotipo de Microsoft MVP'
            ),
            spacing='8',
            columns= rx.breakpoints(
                initial='1',
                xs='2'
            )
        ),
        width='100%',
        align_items='start',
        spacing='4'
    )