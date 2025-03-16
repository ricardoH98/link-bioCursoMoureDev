import reflex as rx
import datetime
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.components.title import title
from link_bio.components.link_button import link_button
from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor
from link_bio.styles.colors import Color
import link_bio.constans as ct

def header(details:bool=True, live:bool = False, live_title:str = "") -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.box(
                rx.cond(
                    live,
                    rx.link(
                        rx.image(
                            src="/icons/twitch.svg",
                            height=Size.DEFAULT.value,
                            width=Size.DEFAULT.value
                        ),
                        href=ct.TWITCH_URL,
                        is_external=True,
                        class_name="blink",
                        border_radius="50%",
                        padding=Size.SMALL.value,
                        bg=Color.PURPLE.value,
                        position="absolute",
                        bottom="0",
                        right="0"
                    )
                ),        
                rx.avatar(

                    fallback= 'BM',
                    src='/avatar.jpg', 
                    size='8', 
                    radius="full",
                    color_scheme='gray',
                    # background_color= Color.CONTENT.value,
                    padding='2px',
                    border='4px',
                    border_color=Color.PRIMARY.value,
                ),
                position='relative'
            ),
            rx.vstack(
                title('Brais Moure','8'),
                rx.text(
                    "@mouredev",
                    color = TextColor.BODY.value
                ),
                rx.hstack(
                    link_icon(
                        '/icons/github.svg',
                        ct.GITHUB_URL,
                        'GitHub'
                    ),
                    link_icon(
                        '/icons/x.svg',
                        ct.TWITTER_X_URL,
                        'Twitter/X'
                    ),
                    link_icon(
                        '/icons/instagram.svg',
                        ct.INSTAGRAM_URL,
                        'Instagram'
                    ),
                    link_icon(
                        '/icons/tiktok.svg',
                        ct.TIKTOK_URL,
                        'TikTok'
                    ),
                    link_icon(
                        '/icons/spotify.svg',
                        ct.SPOTIFY_URL,
                        'Spotify'
                    ),
                    link_icon(
                        '/icons/linkedin.svg',
                        ct.LINKEDIN_URL,
                        'LinkedIn'
                    ),
                    spacing='4'
                ),
                # align_items= 'start',
                spacing= '0'
            ),
            width='100%',
            spacing= '5',
            align_items= 'start',
        ),
        rx.cond(
            details,
            rx.vstack(
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
                rx.cond(
                    live,
                    link_button(
                        "En directo",
                        live_title,
                        "icons/twitch.svg",
                        ct.TWITCH_URL,
                        highlight_color= Color.PURPLE.value
                    )
                ),
                rx.text(
                    f"""
                    Soy ingeniero de software y actualmente trabajo como freelance
                    full-stack developer iOS y Android.
                    Además, creo contenido formativo sobre programación en redes.
                    Aquí podrás encontrar todos mis enlaces de interés ¡Bienvenid@!
                    """,
                    color = TextColor.BODY.value,
                    font_size=Size.DEFAULT.value
                ),
                spacing = '6'
            )
        ),
        spacing= '6',
        align_items= 'start'
    )

def experience() -> int:
    return datetime.date.today().year - 2010


