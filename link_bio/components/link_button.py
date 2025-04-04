import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.colors import Color

def link_button(title:str, body:str,image:str ,url:str, is_external:bool=True, highlight_color=None, animated:bool=False) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    width=styles.Size.LARGE.value,
                    height=styles.Size.LARGE.value,
                    margin= styles.Size.MEDIUM.value,
                    alt=title
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    padding_y= styles.Size.SMALL.value,
                    padding_x= styles.Size.SMALL.value,
                    spacing='0',
                    align_items='start',
                    margin= '0'
                ),
                width='100%'
            ),
            border_color= highlight_color,
            border_width = "2px" if highlight_color != None else "0px",
            class_name=styles.BOUNCEIN_ANIMATION if animated else None
        ),
        href=url,
        is_external=is_external,
        width='100%',
        # class_name=styles.BOUNCEIN_ANIMATION if animated else None
    )
    

        
    