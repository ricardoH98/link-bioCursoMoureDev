import reflex as rx

config = rx.Config(
    app_name="link_bio",
    cors_allowed_origins=[
        "https://link-bio-curso-moure-dev.vercel.app",
        "http://localhost:3000"
    ]
)