import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "约翰·多伊（John Doe）",
      title: "市场总监，TechCorp",
      content:
        "ContentAI 彻底革新了我们的内容工作流程。生成的文章质量非常出色，每周都为我们节省了数小时的工作时间。",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "简·史密斯（Jane Smith）",
      title: "内容创作者，TechCorp",
      content:
        "ContentAI 让我们的内容创作变得毫不费力。AI 工具帮助我们以前所未有的速度产出高质量内容。",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "大卫·李（David Lee）",
      title: "内容撰写人，TechCorp",
      content:
        "ContentAI 完全改变了我们的内容创作方式。AI 工具让我们能够更快地创作出高质量的内容。",
      rating: 4,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          深受创作者喜爱
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          不仅仅是我们的自信之语，来听听用户们的真实心声。
        </p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={
                      index < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    className="w-4 h-4"
                    alt="star"
                  />
                ))}
            </div>
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 object-contain rounded-full"
                alt=""
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
