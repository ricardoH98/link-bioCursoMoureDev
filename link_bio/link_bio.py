"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header.header import header
from link_bio.views.links.links import links
from link_bio.views.sponsors.sponsors import sponsors
from link_bio.styles import styles as styles
from rxconfig import config


# class State(rx.State):
#     """The app state."""

#     ...

# Estructura de la página
def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.box(
            navbar(),
            rx.center(
                rx.vstack(
                    header(),
                    links(),
                    sponsors(),
                    align='center',
                    max_width=styles.MAX_WIDTH,
                    width='100%',
                    margin_y= styles.Size.BIG.value,
                    padding = styles.Size.BIG.value
                )
            ),
            footer()
        )


app = rx.App(
    style= styles.BASE_STYLE,
    stylesheets= styles.STYLESHEETS
)
app.add_page(
    index,
    title='MoureDev | Te enseño programación y desarrollo de Software',
    description='Hola, mi nombre es Brais Moure. Soy ing de software....'
)

