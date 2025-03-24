from enum import Enum
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.fonts import Font, FontWeight
import reflex as rx

# Constants
MAX_WIDTH = '600px'
FADEIN_ANIMATION = "animate__animated animate__fadeIn"
BOUNCEIN_ANIMATION = "animate__animated animate__bounceIn"


STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    "/css/styles.css"
    
]


# Sizes

class Size(Enum):
    SMALL = '0.5em'
    MEDIUM = '0.8em'
    DEFAULT = '1em'
    LARGE = "1.5em"
    BIG = '2em',
    VERYBIG = '4em'

class Spacing(Enum):
    ZERO = "0"
    VERY_SMALL = "1"
    SMALL = "3"
    DEFAULT = "4"
    LARGE = "5"
    BIG = "6"
    MEDIUM_BIG = "7"
    VERY_BIG = "9"


# Styles
# Estilos para aplicar a toda la aplicación

BASE_STYLE = {
    "font-family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    "background_color": Color.BACKGROUND.value,
    'height':'100%',
    rx.button: {
        'width': '100%',
        'height': '100%',
        'display': 'block',
        'padding': Size.SMALL.value,
        'border_radius': Size.DEFAULT.value,
        "background_color": Color.CONTENT.value,
        "text_align": "start",
        "color": TextColor.HEADER.value,
        "border_style": "solid",
        "_hover": {
            "background_color": Color.SECUNDARY.value,

        }
    },
    rx.link: {
        'text_decoration': 'none',
        '_hover': {}
    },
    
}

navbar_title_style = dict(
    font_family= Font.LOGO.value,
    font_weight= FontWeight.MEDIUM.value,
    font_size = Size.LARGE.value
)


title_style = {
    # "font-size": '35px',
    "width": "100%",
    "font_family": Font.TITLE.value,
    "padding_top": Size.DEFAULT.value,
    'color': TextColor.HEADER.value
}

button_title_style = {
    "font_family": Font.TITLE.value,
    "font_weight": FontWeight.MEDIUM.value,
    'font_size': Size.DEFAULT.value,
    'color': TextColor.HEADER.value
}

button_body_style = {
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    'font_size': Size.MEDIUM.value,
    'color': TextColor.BODY.value

}