import reflex as rx
import pytz
from datetime import datetime, timedelta
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

# Date

LOCAL_TIMEZONE_SCRIPT = "Intl.DateTimeFormat().resolvedOptions().timeZone"

WEEKDAYS = {
    0: "Lunes",
    1: "Martes",
    2: "Miércoles",
    3: "Jueves",
    4: "Viernes",
    5: "Sábado",
    6: "Domingo"
}

MONTHS = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
}

# Calcula la próxima fecha disponible a partir de la actual
def next_date(dates:dict, timezone:str) -> str:

    if len(dates) == 0:
        return ""
    
    tz=pytz.timezone(timezone)

    now = datetime.now(tz)

    current_time = now.timetz()

    for weekday in range(7):

        currently_weekday = str((now.weekday() + weekday) % 7)

        if currently_weekday not in dates or dates[currently_weekday] == "":
            continue

        time_utc = datetime.strptime(dates[currently_weekday], "%H:%M").replace(tzinfo=pytz.UTC).timetz()

        # print(time_utc)

        next_time = datetime.combine(now.date(), time_utc).astimezone(tz).timetz()

        # print(next_time)

        if current_time < next_time or weekday > 0:

            next_date = now + timedelta(days=weekday)

            local_date = datetime(next_date.year, next_date.month, next_date.day, time_utc.hour, time_utc.minute, tzinfo=pytz.UTC).astimezone(tz)

            # print(local_date)

            day = "Hoy" if weekday == 0 else WEEKDAYS[local_date.weekday()]
            
            # print("timezone: ", timezone)

            zones = timezone.replace('_', ' ').split('/')

            # print("zones:", zones)

            return local_date.strftime(
                f"{day}, %d de {MONTHS[local_date.month]} a las %H:%M | Zona Horaria: {zones[len(zones) - 1]}"
            )

    return ""

