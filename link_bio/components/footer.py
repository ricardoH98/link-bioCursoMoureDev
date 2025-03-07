import reflex as rx
import datetime
import link_bio.constans as ct
from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src='logo.png',
            margin_bottom='20px',
            height= Size.VERYBIG.value,
            width= Size.VERYBIG.value,
            alt='Logotipo de Mouredev. Una \"eme\" entre llaves'
        ),
        rx.link(
            f'© {datetime.date.today().year} BY Brais Moure',
            href=ct.MOUREDEV_URL,
            is_external=True,
            font_size = Size.MEDIUM.value
        ),
        rx.text(
            'BUILDING SOFTWARE WITH PASSION FROM GALICIA TO THE WORLD',
            font_size = Size.MEDIUM.value
        ),
        align='center',
        # margin_bottom= Size.BIG.value,
        padding_bottom= Size.BIG.value,
        padding_x= Size.BIG.value,
        color= TextColor.FOOTER.value,
        spacing='0'
    )