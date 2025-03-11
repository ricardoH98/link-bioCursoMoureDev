import reflex as rx
from link_bio.routes import Route
import link_bio.constans as ct
from link_bio.components.link_button import link_button
from link_bio.components.title import title


def index_links() -> rx.Component:
    return rx.vstack(
        title('Comunidad', '8'),
        link_button(
            'Cursos gratis',
            'Consulta mis tutoriales para aprender programación',
            '/icons/code.svg',
            Route.COURSES.value,
            is_external=False
        ),        
        link_button(
            'Twitch',
            'Transmisiones sobre programación de lunes a viernes',
            '/icons/twitch.svg',
            ct.TWITCH_URL
        ),
        link_button(
            'Discord',
            'El chat y los grupos de estudio de la comunidad',
            '/icons/discord.svg',
            ct.DISCORD_URL
        ),        
        link_button(
            'Youtube',
            'Tutoriales semanales sobre desarrollo de software',
            '/icons/youtube.svg',
            ct.YOUTUBE_URL
        ),
        link_button(
            'YouTube [canal secundario]',
            'Emisiones en directo destacadas',
            '/icons/youtube.svg',
            ct.YOUTUBE_SECONDARY_URL
        ),

        title('Recursos y más', '8'),
        link_button(
            'Git y Git Hub desde cero',
            'Aquí puedes comprar mi libro en formato físico y eBook',
            '/icons/git.svg',
            ct.BOOK_URL
        ),
        link_button(
            'Libros recomendados',
            'Mi listado de libros sobre programación, ciencia y tecnología',
            '/icons/book.svg',
            ct.BOOKS_URL
        ),
        link_button(
            'Mi Setup',
            'Listado con todos los elementos que uso en mi trabajo',
            '/icons/setup.svg',
            ct.SETUP_URL
        ),
        link_button(
            'MoureDev',
            'Mi sitio web',
            '/icons/logo.png',
            ct.MOUREDEV_URL
        ),
        link_button(
            'Invitame a un café',
            '¿Quieres ayudarme a que siga creando contenido?',
            '/icons/coffee.svg',
            ct.COFFEE_URL
        ),        

        title('Contacto', '8'),
        link_button(
            "MyPublicInbox",
            "Respuesta rápida y con preferencia",
            '/icons/checkemail.svg',
            ct.MYPUBLICINBOX_URL
        ),
        link_button(
            "Email",
            ct.EMAIL,
            '/icons/email.svg',
            f'mailto:{ct.EMAIL}'
        ),        
        width='100%',
        spacing='4'
    )