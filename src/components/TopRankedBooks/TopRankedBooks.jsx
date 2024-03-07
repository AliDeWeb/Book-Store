import React from "react";

//? Icons
import { GiRoundStar } from "react-icons/gi";

//? Images
import productImg from "../../assets/imgs/products-img/01.jpg";

//? React Router
import { Link } from "react-router-dom";

export default function TopRankedBooks() {
  return (
    <div className="py-6">
      <div className="container">
        <div className="text-white">
          <h2 className="text-2xl mb-4">Top Ranked Books</h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="table-fixed w-full">
                <thead className="sm:text-xl text-base">
                  <tr>
                    <th className="w-1/6 text-start p-4 hidden sm:table-cell">
                      Rank
                    </th>
                    <th className="w-1/6 text-start p-4 sm:hidden">#</th>
                    <th className="w-1/6 md:w-1/6 text-start p-4 hidden sm:table-cell">
                      Image
                    </th>
                    <th className="w-5/6 sm:w-4/6 md:w-2/6 text-start p-4">
                      Title
                    </th>
                    <th className="md:w-1/6 text-start p-4 hidden md:table-cell">
                      Author
                    </th>
                    <th className="md:w-1/6 text-start p-4 hidden md:table-cell">
                      Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="font-Inter-Regular text-gray-400">
                  <tr>
                    <td className="p-4">1</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">2</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">3</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">4</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">5</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">6</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">7</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">8</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">9</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">10</td>
                    <td className="p-4 sm:table-cell hidden">
                      <Link>
                        <img
                          src={productImg}
                          alt="img"
                          className="inline size-20"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <Link className="hover:text-white transition-all line-clamp-1">
                        Malcolm Lockyer
                      </Link>
                    </td>
                    <td className="p-4 md:table-cell hidden">
                      <div className="flex gap-0.5 items-center">
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                        <GiRoundStar color="#ffd700" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
