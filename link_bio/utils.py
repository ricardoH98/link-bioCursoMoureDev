import reflex as rx

# Común

def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")

preview = "https://moure.dev/preview.jpg"

# Variable de uso interno: prefijo "_"
_meta=[
        {"name": "og:type", "content":"website"},
        {"name": "og:image", "content": preview},
        {"name": "twitter:card", "content":"summary_large_image"},
        {"name": "twitter:site", "content":"@mouredev"},
]


# index

index_title = 'MoureDev | Te enseño programación y desarrollo de software'
index_description = 'Hola, mi nombre es Brais Moure. Soy ing de software, desarrollador freelance full-stack y divulgador de contenido'

index_meta = [
        {"name": "og:title", "content": index_title},
        {"name": "og:description", "content": index_description},
]

index_meta.extend(_meta)

# Cursos

courses_title = 'MoureDev | Cursos gratis'
courses_description = 'Este es un listado con algunos cursos gratis para aprender programación'
preview = "https://moure.dev/preview.jpg"

courses_meta = [
        {"name": "og:title", "content": courses_title},
        {"name": "og:description", "content": courses_description},
]

courses_meta.extend(_meta)

