import reflex as rx
from link_bio.model.Featured import Featured
from link_bio.styles.styles import Size
import link_bio.styles.styles as styles

def featured_links(item: Featured) -> rx.Component:
    return rx.link(
        rx.vstack(
            rx.image(
                src=item.image,
                border_radius= Size.DEFAULT.value
            ),
            rx.text(
                item.title,
                style=styles.button_body_style
            ),
            spacing='2',
            align_items="start"
        ),
        href=item.url,
        is_external=True
    )