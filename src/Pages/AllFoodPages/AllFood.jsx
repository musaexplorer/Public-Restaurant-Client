import { useEffect, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { WithContext as ReactTags } from "react-tag-input";
import { toast, ToastContainer } from "react-toastify";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AllFoodPerCards from "./AllFoodPerCards";
import useAxious from "../../Hooks/useAxios";
import { Helmet } from "react-helmet";

const AllFood = () => {
    // const [tagsList, setTagsList] = useState([]);
    // const [item, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('https://public-restaurant-server.vercel.app/item')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, []);
    // const [totalItem, setTotalItemnum] = useState(0)
    // const [tags, setTags] = useState([])
    // useEffect(() => {
    //     fetch('Tags.json')
    //         .then(res => res.json())
    //         .then(data => setTags(data))
    // }, [])


    // const suggestions = tags?.map((country) => {
    //     return {
    //         id: country,
    //         text: country,
    //     };
    // });

    // useEffect(() => {
    //     AxiousPublic?.get('/itemlength')
    //         .then(res => {
    //             setTotalItemnum(parseInt(res.data.result));
    //         })
    //         .catch(err => {
    //             console.error('Error fetching item length:', err);
    //         });
    // }, [AxiousPublic]);

    // const totalPage = Math.ceil(totalItem / pagenumber); 


    // const [DataLoading, setDataLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(0)
    // const [pagenumber, setPagenumber] = useState(20)
    // const pages = [...Array(totalPage).keys()]
    // const AxiousPublic = useMemo(()=> useAxious(), []);

    // useEffect(() => {
    //     // Start the loading state
    //     setDataLoading(true);

    //     // Fetch items based on tagsList and pagination
    //     AxiousPublic?.post(`/search`, { tagsList, page: currentPage, size: pagenumber })
    //         .then(res => {
    //             setItems(res?.data);
    //             setDataLoading(false); // End loading state after fetching data
    //         })
    //         .catch(err => {
    //             console.error('Search API Error:', err);
    //             setDataLoading(false); // Ensure loading ends even on error
    //         });
    // },  [tagsList, currentPage, pagenumber, AxiousPublic]);


    // const handleDelete = (i) => {
    //     setTagsList(tagsList?.filter((tag, index) => index !== i));
    // }
    // const handleAddition = (tag) => {
    //     if (tagsList?.length == 3) {
    //         return toast('You can"t add more than 3')
    //     }
    //     setTagsList([...tagsList, tag]);
    // }
    // const handleDrag = (tag, currPos, newPos) => {
    //     const newTags = tagsList?.slice();
    //     newTags?.splice(currPos, 1);
    //     newTags?.splice(newPos, 0, tag);
    //     setTagsList(newTags);
    // }
    // const handleTagClick = (index) => {
    //     console.log("The tag at index " + index + " was clicked");
    // }
    // const handlePageChange = (ind) => {
    //     setCurrentPage(ind);
    //     window.scrollTo(0, 0);
    // }
    // const handleAdd = () => {
    //     const nextPage = currentPage + 1;
    //     if (nextPage >= totalPage) {
    //         return; // Prevent going out of bounds
    //     }
    //     setCurrentPage(nextPage);
    //     window.scrollTo(0, 0);
    // }
    // const handleBack = () => {
    //     const prevPage = currentPage - 1;
    //     if (prevPage < 0) {
    //         return; // Prevent going below 0
    //     }
    //     setCurrentPage(prevPage);
    //     window.scrollTo(0, 0);
    // };

    const [tagsList, setTagsList] = useState([]);
    const [item, setItems] = useState([]);
    useEffect(() => {
        fetch('https://public-restaurant-server.vercel.app/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const [totalItem, setTotalItemnum] = useState(0);
    const [tags, setTags] = useState([]);
    const [DataLoading, setDataLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [pagenumber, setPagenumber] = useState(9);


    // Initialize AxiousPublic using useMemo (before using it anywhere)
    const AxiousPublic = useMemo(() => useAxious(), []);

    // Fetch tags data (only uses fetch, no need for AxiousPublic here)
    useEffect(() => {
        fetch('Tags.json')
            .then(res => res.json())
            .then(data => setTags(data));
    }, []);

    const suggestions = tags?.map((country) => {
        return {
            id: country,
            text: country,
        };
    });


    useEffect(() => {
        if (!AxiousPublic) return; // Ensure AxiousPublic is initialized before use

        AxiousPublic.get('/itemlength')
            .then(res => {
                setTotalItemnum(parseInt(res.data.result));
            })
            .catch(err => {
                console.error('Error fetching item length:', err);
            });
    }, [AxiousPublic]);


    // const totalPage = totalItem > 0 ? Math.ceil(totalItem / pagenumber) : 0;
    const totalPage = Math.ceil(totalItem / pagenumber);
    const pages = [...Array(totalPage).keys()]


    useEffect(() => {
        if (!AxiousPublic || totalPage === 0) return;

        setDataLoading(true); // Set loading state

        // AxiousPublic.post(`/search`, { tagsList, page: currentPage, size: pagenumber })
        //     .then(res => {
        //         setItems(res?.data);
        //         setDataLoading(false); 
        //     })
        //     .catch(err => {
        //         console.error('Search API Error:', err);
        //         setDataLoading(false);
        //     });
        AxiousPublic.post('/search', { tagsList, page: currentPage, size: pagenumber })
            .then(res => {
                setItems(res?.data);
                setDataLoading(false);
            })
            .catch(err => {
                console.error('Search API Error:', err);
                setDataLoading(false);
            });
    },  [tagsList, currentPage, pagenumber, AxiousPublic, totalPage]);



    const handleAdd = () => {
        const nextPage = currentPage + 1;
        if (nextPage >= totalPage) return; // Prevent out of bounds
        setCurrentPage(nextPage);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return; // Prevent going below 0
        setCurrentPage(prevPage);
        window.scrollTo(0, 0);
    };

    const handleDelete = (i) => {
        setTagsList(tagsList?.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        if (tagsList?.length == 3) {
            return toast('You can"t add more than 3')
        }
        setTagsList([...tagsList, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tagsList?.slice();
        newTags?.splice(currPos, 1);
        newTags?.splice(newPos, 0, tag);
        setTagsList(newTags);
    };

    const handleTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const handlePageChange = (ind) => {
        setCurrentPage(ind);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <Helmet>
                <title>BBQHOUSE || ALL FOODS</title>
            </Helmet>
            <h2 className="lg:text-4xl text-3xl font-medium text-center mt-10 mb-6 justify-center flex items-center gap-4">All Foods <FaArrowRight></FaArrowRight></h2>

            <div className="justify-center items-center">
                <div className="w-full p-4 flex items-center justify-between gap-2 lg:flex-row flex-col">
                    <div className="relative border-2 pl-3 border-[#e6bd81] w-full rounded-lg flex items-center text-lg py-2">
                        <ReactTags
                            tags={tagsList}
                            placeholder="Search by tags"
                            suggestions={suggestions}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            handleTagClick={handleTagClick}
                            inputFieldPosition="bottom"
                            autocomplete
                            classNames={{
                                tags: "ReactTags__tags flex justify-start text-xl items-center ",
                                tagInput:
                                    "ReactTags__tagInput w-full lg:w-[500px] md:w-[400px] 380px text-lg",
                                selected: "ReactTags__selected flex  ",
                                tag: "ReactTags__tag bg-gray-200 rounded px-2 py-1 flex mb-2",
                                remove: "ReactTags__remove ml-2 cursor-pointer",
                                suggestions: "ReactTags__suggestions absolute",
                                activeSuggestion:
                                    "ReactTags__activeSuggestion bg-blue-400 cursor-pointer",
                            }}
                        />
                    </div>
                    <button className="btn bg-white btn-outline hover:bg-[#222831] text-[#daa765]">
                        Search
                    </button>
                </div>
                {
                    DataLoading && <div className="mt-[10vh] mb-[10vh] flex justify-center items-center">
                        <div id="wifi-loader">
                            <svg className="circle-outer" viewBox="0 0 86 86">
                                <circle className="back" cx={43} cy={43} r={40} />
                                <circle className="front" cx={43} cy={43} r={40} />
                                <circle className="new" cx={43} cy={43} r={40} />
                            </svg>
                            <svg className="circle-middle" viewBox="0 0 60 60">
                                <circle className="back" cx={30} cy={30} r={27} />
                                <circle className="front" cx={30} cy={30} r={27} />
                            </svg>
                            <svg className="circle-inner" viewBox="0 0 34 34">
                                <circle className="back" cx={17} cy={17} r={14} />
                                <circle className="front" cx={17} cy={17} r={14} />
                            </svg>
                            <div className="text" data-text="Searching" />
                        </div>
                    </div>
                }
                <div className="grid mb-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        item?.map(item => <AllFoodPerCards key={item._id} item={item}></AllFoodPerCards>)
                    }
                </div>
                <ToastContainer />
                <div className="flex justify-center items-center mb-10">
                    {
                        tagsList?.length ? <></> :
                            <>
                                <button onClick={() => { handleBack() }} className={`btn ml-2 font-bold text-xl  `}><IoIosArrowBack /></button>
                                {pages.map((item, ind) => <button onClick={() => { handlePageChange(ind) }} className={`btn ml-2 font-bold text-xl ${currentPage == ind ? 'bg-[#393E46] text-[#00ADB5] hover:bg-[#EEEEEE] border-2 border-[#00ADB5] hover:border-2 hover:border-[#00ADB5]' : 'bg-[#00ADB5] text-[#EEEEEE] hover:bg-[#EEEEEE] border-2 border-[#00ADB5] hover:border-2 hover:text-[#222831] hover:border-[#00ADB5] '} `}>{item + 1}</button>)}
                                <button onClick={() => { handleAdd() }} className={`btn ml-2 font-bold text-xl  `}><IoIosArrowForward /></button>
                            </>
                    }
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default AllFood;