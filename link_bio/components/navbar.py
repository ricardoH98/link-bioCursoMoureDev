import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size
from link_bio.styles.colors import Color

def navbar() -> rx.Component:
    return rx.vstack(
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
            position='sticky',
            bg=Color.CONTENT.value,
            padding_x= Size.BIG.value,
            padding_y= Size.DEFAULT.value,
            z_index='999',
            top='0'
        )