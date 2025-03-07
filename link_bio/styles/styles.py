from enum import Enum
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.fonts import Font, FontWeight
import reflex as rx

# Constants
MAX_WIDTH = '600px'


STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
]


# Sizes

class Size(Enum):
    SMALL = '0.5em'
    MEDIUM = '0.8em'
    DEFAULT = '1em'
    LARGE = "1.5em"
    BIG = '2em',
    VERYBIG = '4em'

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