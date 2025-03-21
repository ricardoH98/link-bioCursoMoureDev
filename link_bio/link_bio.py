"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from link_bio.styles import styles as styles
from link_bio.pages.index import index
from link_bio.pages.courses import courses
from rxconfig import config
from link_bio.api.api import repo, live



app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
        rx.script(
            src=f"https://www.googletagmanager.com/gtag/js?id=G-3YGHT3XJFS"),
        rx.script(
            f"""
window.dataLayer = window.dataLayer || [];
function gtag(){{dataLayer.push(arguments);}}
gtag('js', new Date());
gtag('config', 'G-3YGHT3XJFS');
"""
        ),
    ],
)

# Colocando esta línea, hacemos que la api sea pública a traves del link donde está desplegado el backend y /repo
app.api.add_api_route('/repo', repo)
app.api.add_api_route('/live/{user}', live)
