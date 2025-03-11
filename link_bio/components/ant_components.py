import reflex as rx
from link_bio.styles.colors import Color

class FloatButton(rx.Component):
    library = "antd"
    tag =  "FloatButton"
    # icon = rx.image(src="/icons/donate.svg") # Genera error Unhandled Runtime Error ReferenceError: jsx is not defined
    # icon: rx.Var[rx.image] # No acepta esta nomenclatura
    href: rx.Var[str]
    # href = "https://"
    target = "_blank"
    badge = {"dot": True, "color": Color.PRIMARY.value}

float_button = FloatButton.create 