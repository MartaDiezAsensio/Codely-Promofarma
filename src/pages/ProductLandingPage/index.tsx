import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  Text,
} from "components";

const ProductLandingPagePage: React.FC = () => {
  return (
    <>
      <div className="--white-A700 flex flex-col font-arial items-center justify-start mx-auto pb-1.5 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-gray-50 flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-1.5 w-full">
              <Text className="text-[15px] text-black-900" size="txtArialMT15">
                Envíos a sólo 1,99$ para cestas superiores a 15,00$
              </Text>
              <Text
                className="sm:ml-[0] ml-[321px] text-[15px] text-black-900"
                size="txtArialBoldMT15"
              >
                Enviar a España
              </Text>
              <Text
                className="sm:ml-[0] ml-[19px] mr-[22px] text-[15px] text-black-900"
                size="txtArialBoldMT15"
              >
                Idioma: Español
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1.5 w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[41px] pt-0.5">
                <Text
                  className="lowercase text-black-900 text-xl"
                  size="txtArialBoldMT20"
                >
                  Categorías
                </Text>
              </div>
              <Img
                className="md:flex-1 h-[47px] sm:h-auto md:ml-[0] ml-[499px] md:mt-0 mt-3 object-cover w-[17%] md:w-full"
                src="images/img_promofarmalogo.png"
                alt="promofarmalogo"
              />
              <Img
                className="h-[25px] ml-56 md:ml-[0]"
                src="images/img_ul.svg"
                alt="ul"
              />
            </div>
          </header>
          <div className="md:h-[702px] sm:h-[733px] h-[833px] pl-[115px] md:px-5 relative w-[88%] md:w-full">
            <div className="absolute md:h-[702px] h-[722px] left-[14%] pr-5 pt-5 top-[0] w-[68%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[65px] h-full items-center justify-start ml-[7px] mt-[195px] w-[2%]">
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark.svg"
                  alt="checkmark_One"
                />
              </div>
              <div className="absolute h-[702px] inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto right-[0] w-[73%]">
                  <div className="flex flex-row gap-[526px] items-center justify-start w-[1%] md:w-full">
                    <div className="bg-white-A700 flex flex-col items-end justify-start pb-[18px] w-full">
                      <Img
                        className="h-[684px] md:h-auto object-cover w-full"
                        src="images/img_peachraspberry2900xjpg.png"
                        alt="peachraspberryTwo"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[702px] md:h-auto object-cover w-full"
                        src="images/img_0516pdpimageu.png"
                        alt="0516pdpimageu"
                      />
                    </div>
                  </div>
                </div>
                <CheckBox
                  className="font-bold text-black-900 text-left text-sm"
                  inputClassName="absolute mr-[5px]"
                  name="vendedoresdecon_One"
                  id="vendedoresdecon_One"
                  label="Vendedores de confianza"
                ></CheckBox>
                <CheckBox
                  className="font-bold text-black-900 text-left text-sm"
                  inputClassName="absolute mr-[5px]"
                  name="pago100seguro"
                  id="pago100seguro"
                  label="Pago 100% seguro"
                ></CheckBox>
                <Text
                  className="absolute leading-[20.00px] left-[4%] text-black-900 text-sm top-[27%]"
                  size="txtArialBoldMT14"
                >
                  <span className="text-black-900 font-arial text-left font-bold">
                    <>
                      Devolución garantizada
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_7f font-arial text-left font-bold">
                    durante 14 días
                  </span>
                </Text>
                <Text
                  className="absolute leading-[20.00px] left-[4%] text-black-900 text-sm top-[39%]"
                  size="txtArialBoldMT14"
                >
                  <span className="text-black-900 font-arial text-left font-bold">
                    <>
                      Envíos a sólo 1,99$
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_7f font-arial text-left font-bold">
                    para cestas superiores a 15$
                  </span>
                </Text>
                <div className="absolute bottom-[3%] flex flex-col items-center justify-end left-[0] p-1 w-[14%]">
                  <Text
                    className="mt-[3px] text-base text-center text-green-A700"
                    size="txtArialBoldMT16"
                  >
                    Similares
                  </Text>
                  <Img
                    className="h-[21px] mt-1"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-start justify-start py-[25px] right-[0] w-[24%]">
              <div className="md:h-[165px] h-[188px] ml-0.5 md:ml-[0] relative w-[84%]">
                <Text
                  className="absolute leading-[49.00px] left-[0] sm:text-[34px] md:text-[40px] text-[44px] text-black-900 top-[0] w-[92%] sm:w-full"
                  size="txtArialBoldMT44"
                >
                  <span className="text-black-900 font-arial text-left font-bold">
                    peach raspberry hint
                  </span>
                  <span className="md:text-[34.67px] sm:text-[32.67px] text-black-900 font-arial text-left text-[36.67px] font-bold">
                    ®
                  </span>
                  <span className="text-black-900 font-arial text-left font-bold">
                    {" "}
                    water
                  </span>
                </Text>
                <div className="absolute bottom-[0] flex flex-row h-[27px] md:h-auto items-center justify-evenly left-[0] w-36">
                  <RatingBar
                    className="flex justify-between w-36"
                    value={5}
                    starCount={5}
                    activeColor="#000000"
                    size={27}
                  ></RatingBar>
                </div>
                <Text
                  className="absolute bottom-[1%] right-[0] text-base text-black-900"
                  size="txtVerdana16"
                >
                  6729 Reviews
                </Text>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-[5px] text-[15px] text-black-900"
                size="txtArialMT15"
              >
                Cantidad / Mililítros
              </Text>
              <div className="h-[402px] md:h-[431px] sm:h-[495px] mb-[98px] mt-[22px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-end py-3.5 w-full">
                    <div className="bg-white-A700 border-2 border-black-900 border-solid h-44 md:h-[149px] sm:h-[213px] mt-[63px] p-[9px] relative rounded w-full">
                      <div className="absolute flex flex-col md:gap-10 gap-[104px] h-max inset-y-[0] justify-start left-[4%] my-auto w-[57%]">
                        <div className="flex flex-col items-center justify-center ml-5 md:ml-[0] p-2.5 w-auto">
                          <Text
                            className="lowercase text-[10px] text-red-A700 w-[45px]"
                            size="txtArialBoldMT10"
                          >
                            save 17%
                          </Text>
                        </div>
                        <Text
                          className="lowercase text-gray-800 text-xs"
                          size="txtArialBoldMT12"
                        >
                          no commitment, cancel anytime
                        </Text>
                      </div>
                      <div className="absolute h-[113px] md:h-[78px] inset-x-[0] mx-auto top-[10%] w-[93%]">
                        <div className="absolute flex flex-col items-center justify-start right-[11%] top-[10%] w-1/2">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <Text
                              className="lowercase md:text-2xl sm:text-[22px] text-[26px] text-red-A700"
                              size="txtArialBoldMT26"
                            >
                              $18.99
                            </Text>
                            <Text
                              className="lowercase mt-[5px] text-gray-500_f4 text-xl"
                              size="txtArialBoldMT20Gray500f4"
                            >
                              $23.40
                            </Text>
                          </div>
                        </div>
                        <div className="absolute border border-blue_gray-900 border-solid h-5 left-[0] rounded-[50%] top-[0] w-5">
                          <div className="bg-blue-800 h-2.5 m-auto rounded-[50%] w-2.5"></div>
                          <div className="absolute border border-blue_gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[5px] rounded-[50%] w-5">
                            <div className="bg-black-900 h-2.5 rounded-[50%] w-2.5"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[30px] w-[99%] sm:w-full">
                          <Input
                            name="selectrcshipp"
                            placeholder="Envío en 24-72h"
                            className="font-bold p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                            wrapClassName="bg-white-A700 border border-black-900 border-solid pl-[13px] pr-[35px] py-[15px] rounded w-full"
                          ></Input>
                        </div>
                        <Line className="absolute bg-gray-500 h-px right-[9%] top-1/4 w-[24%]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900 border-solid flex flex-row items-start justify-between p-[15px] rounded w-full">
                      <Text
                        className="mb-[5px] text-black-900 text-center text-xl"
                        size="txtArialMT20"
                      >
                        −
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg"
                        size="txtArialBoldMT18"
                      >
                        1
                      </Text>
                      <Text
                        className="mb-[5px] text-black-900 text-center text-xl"
                        size="txtArialMT20"
                      >
                        +
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-white-A700 cursor-pointer font-bold min-w-[320px] py-[27px] text-base text-center text-white-A700">
                    Comprar
                  </Button>
                </div>
                <Input
                  name="div"
                  placeholder="Descripción del producto"
                  className="p-0 placeholder:text-black-900 sm:pr-5 text-[15px] text-black-900 text-left w-full"
                  wrapClassName="absolute bg-white-A700 border-2 border-gray-100 border-solid inset-x-[0] mx-auto pl-2 pr-[35px] py-[26px] rounded-md top-[0] w-full"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mt-11 pt-[22px] w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
              size="txtArialBoldMT25"
            >
              También te puede gustar
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center px-4 w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
                  <div className="h-[471px] relative rounded-[5px] w-full">
                    <Img
                      className="h-[471px] m-auto object-cover rounded-[5px] w-full"
                      src="images/img_bottleimagesti.png"
                      alt="bottleimagesti"
                    />
                    <div className="absolute bg-black-900_07 h-[471px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[8.5px] items-start justify-start pb-[11.5px] pt-2 w-auto">
                    <div className="flex flex-row items-center justify-between py-[3px] w-full">
                      <Text
                        className="my-0.5 text-base text-black-900"
                        size="txtArialBoldMT16Black900"
                      >
                        watermelon
                      </Text>
                      <Text
                        className="mb-[5px] text-base text-black-900 text-center"
                        size="txtArialBoldMT16Black900"
                      >
                        $22.99
                      </Text>
                    </div>
                    <Text
                      className="text-[15px] text-gray-600 w-auto"
                      size="txtArialMT15Gray600"
                    >
                      1 case of 12 bottles
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <div className="border border-black-900 border-solid flex flex-row items-start justify-between rounded w-[49%]">
                      <Button className="bg-blue_gray-100_b2 border-gray-500_01 border-r border-solid cursor-pointer font-bold min-w-[30px] py-2 rounded-bl rounded-tl text-blue_gray-300 text-center text-xl">
                        -
                      </Button>
                      <Text
                        className="mt-2.5 text-black-900 text-sm"
                        size="txtArialBoldMT14"
                      >
                        1 case
                      </Text>
                      <Button className="bg-teal-900_4c border-gray-500_01 border-l border-solid cursor-pointer font-bold min-w-[33px] py-2 rounded-br rounded-tr text-black-900 text-center text-xl">
                        +
                      </Button>
                    </div>
                    <Button className="bg-black-900 border border-black-900 border-solid cursor-pointer font-bold min-w-[172px] py-[11px] rounded text-[15px] text-center text-white-A700">
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
                  <div className="h-[471px] relative rounded-[5px] w-full">
                    <Img
                      className="h-[471px] m-auto object-cover rounded-[5px] w-full"
                      src="images/img_bottleimagesti_471x353.png"
                      alt="bottleimagesti"
                    />
                    <div className="absolute bg-black-900_07 h-[471px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[8.5px] items-start justify-start pb-[11.5px] pt-2 w-auto">
                    <div className="flex flex-row items-start justify-between py-[3px] w-full">
                      <Text
                        className="mt-1 text-base text-black-900"
                        size="txtArialBoldMT16Black900"
                      >
                        blackberry
                      </Text>
                      <Text
                        className="mb-[5px] text-base text-black-900 text-center"
                        size="txtArialBoldMT16Black900"
                      >
                        $22.99
                      </Text>
                    </div>
                    <Text
                      className="text-[15px] text-gray-600 w-auto"
                      size="txtArialMT15Gray600"
                    >
                      1 case of 12 bottles
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <div className="border border-black-900 border-solid flex flex-row items-start justify-between rounded w-[49%]">
                      <Button className="bg-blue_gray-100_b2 border-gray-500_01 border-r border-solid cursor-pointer font-bold min-w-[30px] py-2 rounded-bl rounded-tl text-blue_gray-300 text-center text-xl">
                        -
                      </Button>
                      <Text
                        className="mt-2.5 text-black-900 text-sm"
                        size="txtArialBoldMT14"
                      >
                        1 case
                      </Text>
                      <Button className="bg-teal-900_4c border-gray-500_01 border-l border-solid cursor-pointer font-bold min-w-[33px] py-2 rounded-br rounded-tr text-black-900 text-center text-xl">
                        +
                      </Button>
                    </div>
                    <Button className="bg-black-900 border border-black-900 border-solid cursor-pointer font-bold min-w-[172px] py-[11px] rounded text-[15px] text-center text-white-A700">
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
                  <div className="h-[471px] relative rounded-[5px] w-full">
                    <Img
                      className="h-[471px] m-auto object-cover rounded-[5px] w-full"
                      src="images/img_bottleimagesti_1.png"
                      alt="bottleimagesti"
                    />
                    <div className="absolute bg-black-900_07 h-[471px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[8.5px] items-start justify-start pb-[11.5px] pt-2 w-auto">
                    <div className="flex flex-row items-start justify-between py-[3px] w-full">
                      <Text
                        className="mt-1 text-base text-black-900"
                        size="txtArialBoldMT16Black900"
                      >
                        pineapple
                      </Text>
                      <Text
                        className="mb-[5px] text-base text-black-900 text-center"
                        size="txtArialBoldMT16Black900"
                      >
                        $22.99
                      </Text>
                    </div>
                    <Text
                      className="text-[15px] text-gray-600 w-auto"
                      size="txtArialMT15Gray600"
                    >
                      1 case of 12 bottles
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <div className="border border-black-900 border-solid flex flex-row items-start justify-between rounded w-[49%]">
                      <Button className="bg-blue_gray-100_b2 border-gray-500_01 border-r border-solid cursor-pointer font-bold min-w-[30px] py-2 rounded-bl rounded-tl text-blue_gray-300 text-center text-xl">
                        -
                      </Button>
                      <Text
                        className="mt-2.5 text-black-900 text-sm"
                        size="txtArialBoldMT14"
                      >
                        1 case
                      </Text>
                      <Button className="bg-teal-900_4c border-gray-500_01 border-l border-solid cursor-pointer font-bold min-w-[33px] py-2 rounded-br rounded-tr text-black-900 text-center text-xl">
                        +
                      </Button>
                    </div>
                    <Button className="bg-black-900 border border-black-900 border-solid cursor-pointer font-bold min-w-[172px] py-[11px] rounded text-[15px] text-center text-white-A700">
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
                  <div className="h-[471px] relative rounded-[5px] w-full">
                    <Img
                      className="h-[471px] m-auto object-cover rounded-[5px] w-full"
                      src="images/img_0730coconutla.png"
                      alt="0730coconutla"
                    />
                    <div className="absolute bg-black-900_07 h-[471px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[8.5px] items-start justify-start pb-[11.5px] pt-2 w-auto">
                    <div className="flex flex-row items-center justify-between py-[3px] w-full">
                      <Text
                        className="my-0.5 text-base text-black-900"
                        size="txtArialBoldMT16Black900"
                      >
                        coconut
                      </Text>
                      <Text
                        className="mb-[5px] text-base text-black-900 text-center"
                        size="txtArialBoldMT16Black900"
                      >
                        $22.99
                      </Text>
                    </div>
                    <Text
                      className="text-[15px] text-gray-600 w-auto"
                      size="txtArialMT15Gray600"
                    >
                      1 case of 12 bottles
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <div className="border border-black-900 border-solid flex flex-row items-start justify-between rounded w-[49%]">
                      <Button className="bg-blue_gray-100_b2 border-gray-500_01 border-r border-solid cursor-pointer font-bold min-w-[30px] py-2 rounded-bl rounded-tl text-blue_gray-300 text-center text-xl">
                        -
                      </Button>
                      <Text
                        className="mt-2.5 text-black-900 text-sm"
                        size="txtArialBoldMT14"
                      >
                        1 case
                      </Text>
                      <Button className="bg-teal-900_4c border-gray-500_01 border-l border-solid cursor-pointer font-bold min-w-[33px] py-2 rounded-br rounded-tr text-black-900 text-center text-xl">
                        +
                      </Button>
                    </div>
                    <Button className="bg-black-900 border border-black-900 border-solid cursor-pointer font-bold min-w-[172px] py-[11px] rounded text-[15px] text-center text-white-A700">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="sm:h-[1095px] h-[1128px] md:h-[2466px] mt-[43px] md:px-5 relative w-full">
            <div className="absolute flex flex-col font-arial h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[773px] items-center justify-start w-full">
                <div className="h-40 relative w-full">
                  <Button
                    className="bg-green-A700 cursor-pointer flex inset-x-[0] items-center justify-center mb-[-7px] min-w-[92px] mx-auto px-4 py-[11px] rounded-[21px] top-[0] z-[1]"
                    leftIcon={
                      <Img
                        className="h-5 mr-[9px] right-[1%] mb-[undefinedpx] z-[1]"
                        src="images/img_question.svg"
                        alt="question"
                      />
                    }
                  >
                    <div className="font-bold text-[15px] text-center text-white-A700 z-[1]">
                      FAQ
                    </div>
                  </Button>
                  <Img
                    className="h-[123px] mt-auto mx-auto object-cover"
                    src="images/img_frame.png"
                    alt="frame"
                  />
                </div>
                <Img className="h-[156px]" src="images/img_svg.svg" alt="svg" />
              </div>
            </div>
            <div className="absolute bg-green-A700_66 flex flex-col font-arial md:gap-10 gap-20 h-max inset-[0] items-center justify-center m-auto p-20 md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-start px-3 w-[94%] md:w-full">
                <div className="flex flex-col items-start justify-start pb-4 w-1/2 md:w-full">
                  <Img
                    className="h-4"
                    src="images/img_waterwhitesvg.svg"
                    alt="waterwhitesvg"
                  />
                  <Text
                    className="leading-[48.00px] mt-[33px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[84%] sm:w-full"
                    size="txtArialBoldMT48"
                  >
                    <span className="text-black-900 font-arial text-left font-bold">
                      peach raspberry hint
                    </span>
                    <span className="md:text-[38px] sm:text-4xl text-black-900 font-arial text-left text-[40px] font-bold">
                      ®
                    </span>
                    <span className="text-black-900 font-arial text-left font-bold">
                      {" "}
                      water
                    </span>
                  </Text>
                  <div className="flex flex-col gap-[29px] items-start justify-start mt-2 w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtArialMT16"
                    >
                      Pure flavored water, with a taste of peach, raspberry and
                      other natural flavors
                    </Text>
                    <div className="flex flex-col gap-[5px] items-start justify-end w-full">
                      <Text
                        className="md:ml-[0] ml-[26px] text-base text-black-900"
                        size="txtArialMT16"
                      >
                        one case of twelve 16-oz. bottles
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[26px] text-base text-black-900"
                        size="txtArialMT16"
                      >
                        zero diet sweeteners
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[26px] text-base text-black-900"
                        size="txtArialMT16"
                      >
                        zero calories
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[26px] text-base text-black-900"
                        size="txtArialMT16"
                      >
                        zero preservatives
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[26px] text-base text-black-900"
                        size="txtArialMT16"
                      >
                        vegan, gluten-free, kosher
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-1/2 md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pr-5 pr-[35px] pt-4 text-[15px] text-black-900 w-auto"
                        size="txtArialBoldMT15"
                      >
                        Serving Size
                      </Text>
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pl-5 pl-[35px] pt-4 text-[15px] text-black-900 text-right w-[355px]"
                        size="txtArialMT15"
                      >
                        16 fl oz (474ml)
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-[13px] sm:pr-5 pr-[35px] pt-4 text-[15px] text-black-900 w-auto"
                        size="txtArialBoldMT15"
                      >
                        Calories
                      </Text>
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pl-5 pl-[35px] pt-4 text-base text-black-900 text-right w-[355px]"
                        size="txtArialMT16"
                      >
                        0g
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pr-5 pr-[35px] pt-4 text-base text-black-900 w-auto"
                        size="txtArialBoldMT16Black900"
                      >
                        Total Fat
                      </Text>
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pl-5 pl-[35px] pt-4 text-base text-black-900 text-right w-[355px]"
                        size="txtArialMT16"
                      >
                        0g
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pr-5 pr-[35px] pt-4 text-base text-black-900 w-auto"
                        size="txtArialBoldMT16Black900"
                      >
                        Sodium
                      </Text>
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pl-5 pl-[35px] pt-4 text-base text-black-900 text-right w-[355px]"
                        size="txtArialMT16"
                      >
                        0mg
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pr-5 pr-[35px] pt-4 text-base text-black-900 w-auto"
                        size="txtArialBoldMT16Black900"
                      >
                        Total Carb
                      </Text>
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pl-5 pl-[35px] pt-4 text-base text-black-900 text-right w-[355px]"
                        size="txtArialMT16"
                      >
                        0g
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pr-5 pr-[35px] pt-4 text-base text-black-900 w-auto"
                        size="txtArialBoldMT16Black900"
                      >
                        Protein
                      </Text>
                      <Text
                        className="border-b-2 border-black-900_26 border-solid pb-3 sm:pl-5 pl-[35px] pt-4 text-base text-black-900 text-right w-[355px]"
                        size="txtArialMT16"
                      >
                        0g
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-base text-black-900"
                    size="txtArialMT16"
                  >
                    Daily values are based on a 2,000 calorie diet.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:px-10 sm:px-5 px-[63px] w-[94%] md:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start pb-[22px] w-auto">
                  <Img
                    className="h-[81px] w-[81px]"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start px-2.5 w-full">
                    <Text
                      className="ml-1 md:ml-[0] text-base text-black-900 text-center"
                      size="txtArialBoldMT16Black900"
                    >
                      vegan{" "}
                    </Text>
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtArialBoldMT16Black900"
                    >
                      friendly
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[22.5px] items-center justify-start md:ml-[0] ml-[127px] pb-[19.5px] w-auto">
                  <Img
                    className="h-[83px] w-[81px]"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Text
                    className="leading-[24.00px] text-base text-black-900 text-center"
                    size="txtArialBoldMT16Black900"
                  >
                    <>
                      gluten <br /> free
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[22.5px] items-center justify-start md:ml-[0] ml-[127px] pb-[22.5px] w-auto">
                  <Img
                    className="h-20 w-[85px]"
                    src="images/img_sugarfreewhitesvg.svg"
                    alt="sugarfreewhites"
                  />
                  <Text
                    className="leading-[24.00px] text-base text-black-900 text-center"
                    size="txtArialBoldMT16Black900"
                  >
                    <>
                      sugar <br /> free
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[22.5px] items-center justify-start md:ml-[0] ml-[126px] pb-[19.5px] w-auto">
                  <Img
                    className="h-[83px] w-[82px]"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Text
                    className="leading-[24.00px] text-base text-black-900 text-center"
                    size="txtArialBoldMT16Black900"
                  >
                    <>
                      preservative <br /> free
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[22px] items-center justify-start md:ml-[0] ml-[127px] pb-5 w-auto">
                  <Img
                    className="h-[83px] w-[82px]"
                    src="images/img_noartificials.svg"
                    alt="noartificials"
                  />
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtArialBoldMT16Black900"
                    >
                      no diet{" "}
                    </Text>
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtArialBoldMT16Black900"
                    >
                      sweeteners
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[10.5px] items-start justify-start md:ml-[0] ml-[127px] pb-[22.5px] w-auto">
                  <Img
                    className="h-20 w-[85px]"
                    src="images/img_koshericonwhiteusvg.svg"
                    alt="koshericonwhite"
                  />
                  <div className="flex flex-col gap-[-12px] items-center justify-start pl-[11.02px] pr-[10.98px] w-auto">
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtArialBoldMT15"
                    >
                      kosher{" "}
                    </Text>
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtArialBoldMT16Black900"
                    >
                      certified
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-row font-outfit gap-[26px] items-start justify-center left-[17%] w-[19%]">
              <div className="flex flex-row h-[27px] md:h-auto items-start justify-start w-36">
                <RatingBar
                  className="flex justify-between w-36"
                  value={5}
                  starCount={5}
                  activeColor="#00cb62"
                  size={27}
                ></RatingBar>
              </div>
              <Text
                className="mt-0.5 text-[18.78px] text-black-900"
                size="txtOutfitRegular1878"
              >
                ( 417 Reviews)
              </Text>
            </div>
            <Text
              className="absolute bottom-[3%] left-[17%] md:text-5xl text-[64px] text-black-900"
              size="txtInterBold64"
            >
              5.0
            </Text>
            <Button className="absolute bg-black-900 bottom-[2%] capitalize cursor-pointer font-bold font-inter leading-[normal] min-w-[191px] py-6 right-[9%] rounded-[7px] text-center text-lg text-white-A700">
              Añadir valoración
            </Button>
            <Button className="absolute border border-black-900 border-solid bottom-[2%] capitalize cursor-pointer font-bold font-inter leading-[normal] min-w-[191px] py-6 right-[23%] rounded-[7px] text-black-900 text-center text-lg">
              Pregunta
            </Button>
          </div>
          <div className="flex flex-row font-outfit gap-[22px] items-start justify-start md:ml-[0] ml-[255px] mt-[85px] md:px-5 w-[17%] md:w-full">
            <div className="flex flex-row h-[27px] md:h-auto items-start justify-start w-36">
              <RatingBar
                className="flex justify-between w-36"
                value={5}
                starCount={5}
                activeColor="#00cb62"
                size={27}
              ></RatingBar>
            </div>
            <Text
              className="mt-0.5 text-[18.78px] text-black-900"
              size="txtOutfitRegular1878"
            >
              ( 7 Reviews)
            </Text>
          </div>
          <div className="flex flex-row font-outfit gap-[22px] items-start justify-start md:ml-[0] ml-[255px] mt-3 md:px-5 w-[18%] md:w-full">
            <div className="flex flex-row h-[27px] md:h-auto items-start justify-start w-36">
              <RatingBar
                className="flex justify-between w-36"
                value={4}
                starCount={5}
                color="#00cb6254"
                activeColor="#00cb62"
                size={27}
              ></RatingBar>
            </div>
            <Text
              className="mt-0.5 text-[18.78px] text-black-900"
              size="txtOutfitRegular1878"
            >
              ( 0 Reviews)
            </Text>
          </div>
          <div className="flex flex-row font-outfit gap-[22px] items-start justify-start md:ml-[0] ml-[255px] mt-3 md:px-5 w-[18%] md:w-full">
            <div className="flex flex-row h-[27px] md:h-auto items-start justify-start w-36">
              <RatingBar
                className="flex justify-between w-36"
                value={3}
                starCount={5}
                color="#00cb6254"
                activeColor="#00cb62"
                size={27}
              ></RatingBar>
            </div>
            <Text
              className="mt-0.5 text-[18.78px] text-black-900"
              size="txtOutfitRegular1878"
            >
              ( 0 Reviews)
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start md:ml-[0] ml-[327px] mt-[86px] md:px-5 w-auto md:w-full">
            <div className="border-b border-black-900_4c border-solid flex flex-col items-start justify-start pb-[161.85px] pt-[21px] sm:px-5 px-[21px] w-auto">
              <div className="flex flex-col gap-[7px] justify-start">
                <Text
                  className="mr-3.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.90px]"
                  size="txtInterRegular30"
                >
                  Camila B.
                </Text>
                <Text
                  className="md:ml-[0] ml-[22px] text-[17.5px] text-green-A700 tracking-[0.90px]"
                  size="txtInterRegular175"
                >
                  <span className="text-green-A700 font-inter text-left font-normal">
                    
                  </span>
                  <span className="text-green-A700 font-inter text-left text-sm font-normal">
                    {" "}
                    Verified Reviewer
                  </span>
                </Text>
              </div>
            </div>
            <div className="border-b border-black-900_4c border-solid flex flex-col items-start justify-start pb-[50px] pt-[21px] sm:px-5 px-[21px] w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col gap-[13.5px] items-start justify-start sm:pr-5 pr-[21px] w-auto">
                  <div className="flex flex-row gap-[7px] items-start justify-start pb-[0.4px] pl-[132px] pr-[323px] pt-[1.6px] md:px-10 sm:px-5 w-auto sm:w-full">
                    <Img
                      className="h-[25px] w-[125px]"
                      src="images/img_span.svg"
                      alt="span"
                    />
                    <Text
                      className="text-[13px] text-black-900 tracking-[0.90px] w-auto"
                      size="txtInterRegular13"
                    >
                      2 days ago
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8.75px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[17.5px] text-black-900 uppercase w-auto"
                      size="txtInterBold175"
                    >
                      amazing
                    </Text>
                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[26.35px] w-auto sm:w-full">
                      <Text
                        className="leading-[36.00px] max-w-[504px] md:max-w-full text-[19px] text-black-900"
                        size="txtInterRegular19"
                      >
                        Amazing flavours - I was so surprised that high protein
                        cereal has this Flavour. Highly recommended and I will
                        keep ordering. One of my favorites is frosted one ☺️
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start md:ml-[0] ml-[327px] mt-7 md:px-5 w-auto md:w-full">
            <div className="border-b border-black-900_4c border-solid flex flex-col items-start justify-start pb-[125.85px] pt-[21px] sm:px-5 px-[21px] w-auto">
              <div className="flex flex-col gap-2 justify-start">
                <Text
                  className="mr-[114px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.90px]"
                  size="txtInterRegular30"
                >
                  Laura A.
                </Text>
                <Text
                  className="md:ml-[0] ml-[22px] text-[17.5px] text-green-A700 tracking-[0.90px]"
                  size="txtInterRegular175"
                >
                  <span className="text-green-A700 font-inter text-left font-normal">
                    
                  </span>
                  <span className="text-green-A700 font-inter text-left text-sm font-normal">
                    {" "}
                    Verified Buyer
                  </span>
                </Text>
              </div>
            </div>
            <div className="border-b border-black-900_4c border-solid flex flex-col items-start justify-start pb-[50px] pt-[21px] sm:px-5 px-[21px] w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col gap-[13.5px] items-start justify-start sm:pr-5 pr-[21px] w-auto">
                  <div className="flex flex-row gap-[7px] items-start justify-start pb-[0.4px] pl-[132px] pr-[323px] pt-[1.6px] md:px-10 sm:px-5 w-auto sm:w-full">
                    <Img
                      className="h-[25px] w-[125px]"
                      src="images/img_span.svg"
                      alt="span_One"
                    />
                    <Text
                      className="text-[13px] text-black-900 tracking-[0.90px] w-auto"
                      size="txtInterRegular13"
                    >
                      3 days ago
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8.75px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[17.5px] text-black-900 uppercase w-auto"
                      size="txtInterBold175"
                    >
                      Delicious
                    </Text>
                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[29.78px] w-auto sm:w-full">
                      <Text
                        className="leading-[36.00px] max-w-[501px] md:max-w-full text-black-900 text-xl"
                        size="txtInterRegular20"
                      >
                        Great flavours and even the children like them, so less
                        sugar for whole household, thank you!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start md:ml-[0] ml-[327px] mt-7 md:px-5 w-auto md:w-full">
            <div className="border-b border-black-900_4c border-solid flex flex-col items-start justify-start pb-[161.85px] pt-[21px] sm:px-5 px-[21px] w-auto">
              <div className="flex flex-col gap-2 justify-start">
                <Text
                  className="mr-[98px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.90px]"
                  size="txtInterRegular30"
                >
                  Edward I.
                </Text>
                <Text
                  className="md:ml-[0] ml-[22px] text-[17.5px] text-green-A700 tracking-[0.90px]"
                  size="txtInterRegular175"
                >
                  <span className="text-green-A700 font-inter text-left font-normal">
                    
                  </span>
                  <span className="text-green-A700 font-inter text-left text-sm font-normal">
                    {" "}
                    Verified Buyer
                  </span>
                </Text>
              </div>
            </div>
            <div className="border-b border-black-900_4c border-solid flex flex-col items-start justify-start pb-[50px] pt-[21px] sm:px-5 px-[21px] w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col gap-[13.5px] items-start justify-start sm:pr-5 pr-[21px] w-auto">
                  <div className="flex flex-row gap-[7px] items-start justify-start pb-[0.4px] pl-[132px] pr-[323px] pt-[1.6px] md:px-10 sm:px-5 w-auto sm:w-full">
                    <Img
                      className="h-[25px] w-[125px]"
                      src="images/img_span.svg"
                      alt="span_Two"
                    />
                    <Text
                      className="text-[13px] text-black-900 tracking-[0.90px] w-auto"
                      size="txtInterRegular13"
                    >
                      4 days ago
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8.75px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[16.5px] text-black-900 uppercase w-auto"
                      size="txtInterBold165"
                    >
                      Great & healthy cereal
                    </Text>
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[45.92px] w-auto sm:w-full">
                      <Text
                        className="leading-[36.00px] max-w-[485px] md:max-w-full text-black-900 text-xl"
                        size="txtInterRegular20"
                      >
                        Love this cereal! Very tasty and packed with protein,
                        highly recommend it to anyone looking for a healthy
                        breakfast option!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex font-arial items-center justify-center mt-[153px] md:px-5 w-full">
            <div className="md:h-[1235px] h-[594px] sm:h-[649px] mb-[23px] mt-8 mx-auto relative w-[92%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[111.77px] items-start justify-start pl-[47.88px] pr-[47.91px] pt-[146.97px] md:px-10 sm:px-5 w-auto md:w-full">
                    <div className="flex flex-col gap-[12.72px] items-start justify-start pb-[45.66px] pt-[17.72px] w-auto">
                      <Text
                        className="lowercase text-[18.72px] text-black-900 w-auto"
                        size="txtArialBoldMT1872"
                      >
                        water
                      </Text>
                      <ul className="flex flex-col items-start justify-start pr-[5.75px] pt-[0.5px] w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">track orders</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">reviews</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">locations</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              subscribe to save
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              flavored water
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              hint+ vitamin
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              sparkling water
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              caffeinated water
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              kids flavored water
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              variety packs
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              office water delivery
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[12.72px] items-start justify-start pb-[269.66px] pt-[17.72px] w-auto">
                      <Text
                        className="lowercase text-[18.72px] text-black-900 w-auto"
                        size="txtArialBoldMT1872"
                      >
                        Conócenos
                      </Text>
                      <ul className="flex flex-col items-start justify-start pr-[3.66px] pt-[0.5px] w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-[15px] text-gray-800"
                          >
                            <Text size="txtArialMT15Gray800">
                              give $10, get $10
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              hint® rewards
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-[15px] text-gray-800"
                          >
                            <Text size="txtArialMT15Gray800">press</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase text-[15px] text-gray-800"
                          >
                            <Text size="txtArialMT15Gray800">careers</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[12.72px] items-start justify-start pb-[141.16px] pt-[17.72px] w-auto">
                      <Text
                        className="lowercase text-[18.72px] text-black-900 w-auto"
                        size="txtArialBoldMT1872"
                      >
                        Contacto
                      </Text>
                      <ul className="flex flex-col items-start justify-start pr-1 py-1 w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-1 text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">my account</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-[11px] text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">contact us</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-3.5 text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">FAQ</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-[13px] text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              return policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-[13px] text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              shipping policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-3 text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">sitemap</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="lowercase mt-[13px] text-base text-gray-800"
                          >
                            <Text size="txtArialMT16Gray800">
                              accessibility statement
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <Img
                              className="h-[23px] md:h-auto my-1 object-cover"
                              src="images/img_englisheaicon.png"
                              alt="englisheaicon"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-9 items-start justify-start pt-[146.97px] w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-start pb-2 w-full">
                      <div className="flex flex-col gap-[2.09px] items-start justify-start pb-[0.5px] md:pr-10 sm:pr-5 pr-[86px] w-auto sm:w-full">
                        <Text
                          className="lowercase sm:text-[17.4px] md:text-[19.4px] text-[21.4px] text-black-900 w-auto"
                          size="txtArialBoldMT214"
                        >
                          Síguenos!
                        </Text>
                        <Text
                          className="text-[15.2px] text-black-900 w-auto"
                          size="txtArialBoldMT152"
                        >
                          be the first to hear about exclusive offers
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start mt-5 w-auto sm:w-full">
                        <Input
                          name="email"
                          placeholder="email@hint.com*"
                          className="leading-[normal] p-0 placeholder:text-gray-600_01 sm:pr-5 text-base text-gray-600_01 text-left w-full"
                          wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pb-[7px] pl-[7px] pr-[35px] pt-[11px] rounded w-full"
                          type="email"
                        ></Input>
                        <Input
                          name="phonenumber"
                          placeholder="cell phone (optional)**"
                          className="leading-[normal] p-0 placeholder:text-gray-600_01 sm:pr-5 text-base text-gray-600_01 text-left w-full"
                          wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pb-[7px] pl-[7px] pr-[35px] pt-[11px] rounded w-full"
                          type="number"
                        ></Input>
                        <Button className="bg-black-900 cursor-pointer font-bold lowercase min-w-[384px] sm:min-w-full py-[11px] rounded text-[15px] text-center text-white-A700">
                          sign up
                        </Button>
                      </div>
                      <Text
                        className="leading-[15.00px] mt-3.5 text-black-900 text-xs"
                        size="txtArialMT12"
                      >
                        <>
                          *By completing this form you are signing up to receive
                          our emails. You can unsubscribe at any time. <br />
                          <br /> **By signing up via text, you agree to receive
                          marketing messages at the number provided. Consent is
                          not a condition of purchase. Message and data rates
                          may apply. Message frequency varies. Reply HELP for
                          help or STOP to cancel. View our Privacy Policy and
                          Terms of Service.
                        </>
                      </Text>
                    </div>
                    <Img
                      className="h-8 w-96"
                      src="images/img_ul_black_900.svg"
                      alt="ul_One"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute border-gray-100 border-solid border-t bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[187px] w-full">
                <div className="flex flex-col gap-[26px] items-start justify-start pt-[3px] w-full">
                  <Text
                    className="text-[13px] text-blue_gray-900_01"
                    size="txtArialMT13"
                  >
                    Copyright 2022 Hint Inc. All rights reserved.
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[998px] w-full">
                    <div className="flex flex-col gap-[3.38px] items-center justify-start pr-[2.79px] w-auto">
                      <Text
                        className="border-b border-blue_gray-100 border-solid pl-[3px] pr-[7px] pt-1 text-blue_gray-900_01 text-xs w-auto"
                        size="txtArialMT12Bluegray90001"
                      >
                        Terms of Use
                      </Text>
                      <Text
                        className="text-[13px] text-blue_gray-900_01 w-auto"
                        size="txtArialMT13"
                      >
                        |
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[3.38px] items-center justify-start sm:ml-[0] ml-[3px] pr-[2.79px] w-auto">
                      <a
                        href="javascript:"
                        className="border-b border-blue_gray-100 border-solid pl-[3px] pr-2 pt-[5px] text-blue_gray-900_01 text-xs w-auto"
                      >
                        <Text size="txtArialMT12Bluegray90001">
                          Privacy Policy
                        </Text>
                      </a>
                      <Text
                        className="text-[13px] text-blue_gray-900_01 w-auto"
                        size="txtArialMT13"
                      >
                        |
                      </Text>
                    </div>
                    <Text
                      className="border-b border-blue_gray-100 border-solid sm:ml-[0] ml-[3px] pl-[3px] pr-1.5 pt-[5px] text-[13px] text-blue_gray-900_01 w-auto"
                      size="txtArialMT13"
                    >
                      Do Not Sell My Personal Information
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <Img
            className="md:h-auto h-px mt-[135px] object-cover w-px"
            src="images/img_hw.png"
            alt="hw"
          />
        </div>
      </div>
    </>
  );
};

export default ProductLandingPagePage;
