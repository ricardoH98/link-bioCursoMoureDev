import reflex as rx
import link_bio.styles.styles as styles

def title(text: str, size:str) -> rx.Component:
    return rx.heading(
        text,
        size= size,
        style= styles.title_style
    )