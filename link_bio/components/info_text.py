import reflex as rx
from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor
from link_bio.styles.colors import Color

def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.text(
            title, 
            as_= "span", 
            weight='bold', 
            color= Color.PRIMARY.value
        ),
        f' {body}',
        font_size = Size.MEDIUM.value,
        color = TextColor.BODY.value
    )