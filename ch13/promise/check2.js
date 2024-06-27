await Promise.all([1,2,3,4,5].map(() => 
    new Promise((resolve) => {setTimeout(resolve, 2000)})
            .then(() => 
                {console.log("a"); while(true){}}
        )
    )
);