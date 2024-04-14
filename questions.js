const all_questions = [
        { 
            question: "Sony Alpha 7 III, ISO: 3200, Shutter Speed: 1/125s", 
            imageUrl: "https://images.unsplash.com/photo-1710390827915-2c53d32be539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-couple-of-people-that-are-standing-outside-of-a-building-VM4wDDS4jlA",
            answer: "f2.8" 
        },
        { 
            question: "Canon EOS 5D Mark III, ISO: 100, Shutter Speed: 1/250s", 
            imageUrl: "https://images.unsplash.com/photo-1712828816586-32503ef619f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-couple-of-people-walking-down-a-street-next-to-tall-buildings-nglwPoQOpFw",
            answer: "f6.3" 
        },
        { 
            question: "Sony Alpha 7C, ISO: 50, Shutter Speed: 1/400s", 
            imageUrl: "https://images.unsplash.com/photo-1712876445548-e7ffc70d42a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-city-street-filled-with-traffic-next-to-tall-buildings-D7yuvcROuyE",
            answer: "f3.2" 
        },
        { 
            question: "Nikon Z6 II, ISO: 50, Shutter Speed: 1/100s", 
            imageUrl: "https://images.unsplash.com/photo-1712415341931-96aff76a42e9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-group-of-people-walking-down-a-street-at-night-DQ28tllxeHM",
            answer: "f2" 
        },
        { 
            question: "Fujifilm X-T5, ISO: 64, Shutter Speed: 1/80s", 
            imageUrl: "https://images.unsplash.com/photo-1712112187978-ff63481fd933?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-train-traveling-over-a-bridge-next-to-tall-buildings-m9U2p94Ftzs",
            answer: "f2" 
        },
        { 
            question: "Nikon Z6 II, ISO: 100, Shutter Speed: 0.4s", 
            imageUrl: "https://images.unsplash.com/photo-1711465582458-54909c517a2a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-crowd-of-people-walking-across-a-street-at-night-DzQsExG9H-o",
            answer: "f7.1" 
        },
        { 
            question: "Sony Alpha 7 IV, ISO: 200, Shutter Speed: 1/5s", 
            imageUrl: "https://images.unsplash.com/photo-1710781403938-5a29304f37ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-group-of-people-moving-down-an-escalator-QIgWfSX4kRc",
            answer: "f6.3" 
        },
        { 
            question: "Leica Q, ISO: 3200, Shutter Speed: 1/6s", 
            imageUrl: "https://images.unsplash.com/photo-1712661073489-3bccd2199055?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-person-standing-outside-of-a-building-at-night-hY-9crydl8c",
            answer: "f8" 
        },
        { 
            question: "Sony Alpha 7 III, ISO: 500, Shutter Speed: 1/160s", 
            imageUrl: "https://images.unsplash.com/photo-1712647177142-55d804a45680?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/SD00fOkdqSg",
            answer: "f5.6" 
        },
        { 
            question: "Nikon D850, ISO: 80, Shutter Speed: 1/160s", 
            imageUrl: "https://images.unsplash.com/photo-1711202461568-2c11989c65fa?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-snow-covered-mountain-with-a-sky-background-rNF59uSHMWk",
            answer: "f2.8" 
        },
        { 
            question: "Fujifilm X-H1, ISO: 100, Shutter Speed: 25s", 
            imageUrl: "https://images.unsplash.com/photo-1538477080496-24fefe5fe161?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/overlooking-view-of-mountain-under-clouds-gYCMiZp-A7E",
            answer: "f10" 
        },
        { 
            question: "Fujifilm X-T5, ISO: 125, Shutter Speed: 1/250s", 
            imageUrl: "https://images.unsplash.com/photo-1712673513608-90e9d3fe64c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            imageSource: "https://unsplash.com/photos/a-rock-formation-with-a-hole-in-the-middle-a5tIqrgJa48",
            answer: "f7.1" 
        },
    ];