import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size
from link_bio.styles.colors import Color
from link_bio.routes import Route
from link_bio.components.ant_components import float_button
import link_bio.constans as ct

def navbar() -> rx.Component:
    return rx.vstack(
           rx.link(
                rx.box(
                    rx.text(
                        'moure',
                        as_="span",
                        color = Color.PRIMARY.value
                    ),
                    rx.text(
                        'dev',
                        as_="span",
                        color = Color.SECUNDARY.value
                    ),
                    style= styles.navbar_title_style
                ),
                href= Route.INDEX.value
            ),
            float_button(
                href= ct.COFFEE_URL
            ),            
            position='sticky',
            bg=Color.CONTENT.value,
            padding_x= Size.BIG.value,
            padding_y= Size.DEFAULT.value,
            z_index='999',
            top='0'
        )