import reflex as rx
import link_bio.utils as utils
import link_bio.constans as ct
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header import header
from link_bio.views.index_links import index_links
from link_bio.views.sponsors import sponsors
from link_bio.styles import styles as styles
from link_bio.routes import Route
from rxconfig import config
from link_bio.api.api import repo, live
from link_bio.state.PageState import PageState
from link_bio.model.Live import Live

# Estructura de la página
@rx.page(
        route= Route.INDEX.value,
        title= utils.index_title,
        description= utils.index_description,
        image= utils.preview,
        meta= utils.index_meta,
        # on_load= [PageState.check_live, PageState.featured_links, PageState.check_schedule]
)
def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.box(
            utils.lang(),
            navbar(),
            rx.center(
                rx.vstack(
                    header(),
                    index_links(),
                    sponsors(),
                    align='center',
                    max_width=styles.MAX_WIDTH,
                    width='100%',
                    margin_y= styles.Size.BIG.value,
                    padding = styles.Size.BIG.value
                )
            ),
            footer()
        )

