import reflex as rx
import link_bio.styles.styles as styles

def link_button(title:str, body:str,image:str ,url:str) -> rx.Component:
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
            )
        ),
        href=url,
        is_external=True,
        width='100%'
    )
    
    
    
    

    # return rx.link(
    #         rx.button(text, width='100%'),
    #         href=url,
    #         is_external=True,
    #         width='100%'
    #     )
        
    