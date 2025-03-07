import reflex as rx
import link_bio.constans as ct
from link_bio.components.link_button import link_button
from link_bio.components.title import title


def links() -> rx.Component:
    return rx.vstack(
        title('Comunidad', '8'),
        link_button(
            'Twitch',
            'Transmisiones sobre programación de lunes a viernes',
            'icons/twitch.svg',
            ct.TWITCH_URL
        ),
        link_button(
            'Youtube',
            'Tutoriales semanales sobre desarrollo de software',
            'icons/twitch.svg',
            ct.YOUTUBE_URL
        ),
        link_button(
            'Kick',
            'Directos sábados',
            'icons/twitch.svg',
            'https://kick.com/'
        ),
        link_button(
            'Discord',
            'Chat de la comunidad',
            'icons/twitch.svg',
            ct.DISCORD_URL
        ),

        title('Recursos y más', '8'),
        link_button(
            'Git Hub',
            'Directos de lunes a viernes',
            'icons/twitch.svg',
            'https://www.twitch.tv/ricardo4698'
        ),
        link_button(
            'Libros',
            'Tutoriales semanales',
            'icons/twitch.svg',
            'https://www.youtube.com/@ricardoheredia3291'
        ),
        link_button(
            'Stup',
            'Directos sábados',
            'icons/twitch.svg',
            'https://kick.com/ricardo-98-444444'
        ),
        link_button(
            'Otros',
            'Chat de la comunidad',
            'icons/twitch.svg',
            'https://www.google.com/'
        ),

        title('Contacto', '8'),
        link_button(
            "MyPublicInbox",
            "Respuesta rápida y con preferencia",
            'icons/twitch.svg',
            ct.MYPUBLICINBOX_URL
        ),
        link_button(
            "Email",
            ct.EMAIL,
            'icons/twitch.svg',
            f'mailto:{ct.EMAIL}'
        ),        
        width='100%',
        spacing='4'
    )