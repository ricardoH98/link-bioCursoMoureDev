import reflex as rx
import datetime
import link_bio.constans as ct
from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor
from link_bio.styles.colors import Color

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src='/logo.png',
            margin_bottom='20px',
            height= Size.VERYBIG.value,
            width= Size.VERYBIG.value,
            alt='Logotipo de Mouredev. Una \"eme\" entre llaves'
        ),
        rx.link(
           rx.box( 
                f'© 2014-{datetime.date.today().year} ', 
                rx.text(
                    'MoureDev by Brais Moure',
                    as_= "span",
                    color= Color.PRIMARY.value
                ),
                ' v3'
           ),
            href=ct.MOUREDEV_URL,
            is_external=True,
            font_size = Size.MEDIUM.value,
            color = TextColor.FOOTER.value
            
        ),
        rx.link(
            rx.hstack(
                rx.image(
                    src="/icons/github.svg",
                    height=Size.LARGE.value,
                    width= Size.LARGE.value
                ),
                rx.text(
                    'BUILDING SOFTWARE WITH ❤ FROM GALICIA TO THE WORLD',
                    font_size = Size.MEDIUM.value
                ),
                align='center'
            ),
            href= ct.REPO_URL,
            is_external= True,
            color = TextColor.FOOTER.value
        ),

        align='center',
        # margin_bottom= Size.BIG.value,
        padding_bottom= Size.BIG.value,
        padding_x= Size.BIG.value,
        color= TextColor.FOOTER.value,
        spacing='0'
    )