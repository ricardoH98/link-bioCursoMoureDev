import reflex as rx
import datetime
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.components.title import title
from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor
from link_bio.styles.colors import Color
import link_bio.constans as ct

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                fallback= 'BM',
                src='/avatar.jpg', 
                size='8', 
                radius="full",
                color_scheme='gray',
                # background_color= Color.CONTENT.value,
                padding='2px',
                border='4px',
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                title('Brais Moure','8'),
                rx.text(
                    "@mouredev",
                    color = TextColor.BODY.value
                ),
                rx.hstack(
                    link_icon(
                        'icons/twitch.svg',
                        ct.GITHUB_URL,
                        'GitHub'
                    ),
                    link_icon(
                        'icons/twitch.svg',
                        ct.TWITTER_X_URL,
                        'Twitter/X'
                    ),
                    link_icon(
                        'icons/twitch.svg',
                        ct.INSTAGRAM_URL,
                        'Instagram'
                    ),
                    link_icon(
                        'icons/twitch.svg',
                        ct.TIKTOK_URL,
                        'TikTok'
                    ),
                    link_icon(
                        'icons/twitch.svg',
                        ct.SPOTIFY_URL,
                        'Spotify'
                    ),
                    link_icon(
                        'icons/twitch.svg',
                        ct.LINKEDIN_URL,
                        'LinkedIn'
                    ),
                    spacing='4'
                ),
                align_items= 'start',
                spacing= '0'
            ),
            spacing= '5'
        ),
        rx.flex(
            info_text(
                f"{experience()}+", 
                'años de experiencia'
            ),
            rx.spacer(),
            info_text(
                '100+', 
                'aplicaciones creadas'
            ),
            rx.spacer(),
            info_text(
                '+1M', 
                'seguidores'
            ),
            width='100%'
        ),
        rx.text(
            f""" 
            Soy ingeniero de software con más de {experience()} años de experiencia que le encanta la programación y aprender nuevas tecnologías, tengo un enfoque en la automatización y en encontrar soluciones a problemas. 
            """,
            color = TextColor.BODY.value,
            font_size=Size.DEFAULT.value
        ),

        spacing= '6',
        align_items= 'start'
    )

def experience() -> int:
    return datetime.date.today().year - 2010


    # return rx.vstack(
    #     rx.avatar(fallback= 'RH', size='5', radius="full"),
    #     rx.text("@richi"),
    #     rx.text("HOLA MI NOMBRES ES RICARDO HEREDIA"),
    #     rx.text(""" Soy ingeniero industrial que le encanta la programación y aprender nuevas tecnologías, tengo un enfoque en la automatización y en encontrar soluciones a problemas. """),
    #     align='center'
    # )