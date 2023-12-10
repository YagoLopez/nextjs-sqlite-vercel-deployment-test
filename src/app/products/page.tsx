import Card from "../../components/card"

export default function Page1() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Cooking BLog
          </a>
        </div>
        <a href="#">See All</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card
          title="Título 1"
          content="Contenido 1"
          imageUrl="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          tag="Etiqueta"
          footerLeft="Footer Left"
          footerRight="Footer Right"
        />

        <Card
          title="Título 2"
          content="Contenido 2"
          imageUrl="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          tag="Etiqueta"
          footerLeft="Footer Left"
          footerRight="Footer Right"
        />

        <Card
          title="Título 3"
          content="Contenido 3"
          imageUrl="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          tag="Etiqueta"
          footerLeft="Footer Left"
          footerRight="Footer Right"
        />

        <Card
          title="Título 2"
          content="Contenido 2"
          imageUrl="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          tag="Etiqueta"
          footerLeft="Footer Left"
          footerRight="Footer Right"
        />
      </div>
    </div>
  )
}
