import reflex as rx
from link_bio.routes import Route
import link_bio.constans as ct
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size, Color


def courses_links() -> rx.Component:
    return rx.vstack(
        title('Cursos gratis', '8'),
        link_button(
            'Retos de programación',
            'Ruta de estudio semanal para practicar lógica de programación',
            '/icons/challenges.png',
            ct.CODE_CHALLENGES_URL,
            highlight_color= Color.SECUNDARY.value
        ),
        link_button(
            "JavaScript desde cero",
            "¡Nuevo! Curso en desarrollo",
            "/icons/js.svg",
            ct.JS_COURSE_URL
        ),
        link_button(
            "Python desde cero",
            "Curso de +44h: Fundamentos, frontend, backend, testing...",
            "/icons/python.svg",
            ct.PYTHON_COURSE_URL
        ),
        link_button(
            "Git y GitHub",
            "Curso de 5h para aprender Git y GitHub desde cero",
            "/icons/git.svg",
            ct.GIT_COURSE_URL
        ),
        link_button(
            "SQL y Bases de Datos",
            "Curso de 7h desde cero para aprender los fundamentos de SQL",
            "/icons/sql.svg",
            ct.SQL_COURSE_URL
        ),
        link_button(
            "Un día, un lenguaje",
            "Primeros pasos en los 11 lenguajes de programación más usados",
            "/icons/code.svg",
            ct.LANGUAGES_COURSE_URL
        ),

        title("Mucho más en",'8'),
        link_button(
            "Twitch",
            "Transmisiones sobre programación y desarrollo",
            "/icons/twitch.svg",
            ct.TWITCH_URL
        ),
        link_button(
            "YouTube",
            "Cursos y tutoriales sobre desarrollo de software",
            "/icons/youtube.svg",
            ct.YOUTUBE_URL
        ),
        link_button(
            "YouTube [canal secundario]",
            "Emisiones en directo destacadas",
            "/icons/youtube.svg",
            ct.YOUTUBE_SECONDARY_URL
        ),                
        width='100%',
        spacing='4'
    )