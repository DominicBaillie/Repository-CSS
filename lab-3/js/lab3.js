// STEP 6: Nab all the SUMMARY elements
const tabs = document.querySelectorAll("tabs");

tabs.forEach((tab) => {
tab.addEventListener("click", (event) => {
		if (event.target.open)
		{
			tab.forEach((detail) => 
			{
				if(tab !== event.target)
				{
					tab.removeAttribute("open");
				}

			});
		}
	});

});