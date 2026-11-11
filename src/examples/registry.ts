import { productPageExample } from './2.1-tienda-online/ProductPage.example'
import { cinemaBookingExample } from './2.2-cine/CinemaBooking.example'
import { recipePageExample } from './3.1-receta/RecipePage.example'
import { newsArticleExample } from './3.2-noticia/NewsArticle.example'
import { libraryLoginExample } from './4.1-biblioteca/LibraryLogin.example'
import { busTimetableExample } from './4.2-horarios/BusTimetable.example'
import { festivalPageExample } from './4.3-festival/FestivalPage.example'
import { museumExhibitionExample } from './5.1-museo/MuseumExhibition.example'
import { repairBookingExample } from './5.2-taller-bicicletas/RepairBooking.example'
import type { ExampleDefinition } from './types'

/** Única fuente de las páginas de ejemplo, en el orden del curso. */
export const exampleRegistry: ExampleDefinition[] = [
  productPageExample,
  cinemaBookingExample,
  recipePageExample,
  newsArticleExample,
  libraryLoginExample,
  busTimetableExample,
  festivalPageExample,
  museumExhibitionExample,
  repairBookingExample,
]
