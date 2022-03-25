import { Accordion} from "semantic-ui-react";

export const accordionNesting = (jsonData, levels) => {

  if (jsonData.length === 0){

    return;

  }
    
  for (let i = 0; i < jsonData.length; i++) {
    accordionNesting(jsonData[i]["content"], levels + 1);


    if (jsonData[i]["content"].length !== 0) {
      jsonData[i]["content"] = {
        content: (
          <div>
            <Accordion.Accordion panels={jsonData[i]["content"]} />
          </div>
        )
      };
    } 
    
    else {

      jsonData[i]["content"] = {

        content: (
          
          <div>

            <Accordion.Title
              content="Thank You!"
              as={"button"}
              onClick={(event) => {
                console.log(event.target.textContent);
              }}
            />

          </div>
        )
      };
    }
  }
};
