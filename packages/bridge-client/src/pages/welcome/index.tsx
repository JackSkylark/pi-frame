import * as React from "react";
import Panel from "../../component/Panel";

const Welcome: React.SFC = () =>
{
    return (
        <div>
            <Panel>
                <p>
                    Hi!
                </p>
                <p>
                    Welcome! We're so glad that you will be using the PI Frame. 
                    To get started, simply click on Photos to access all of your favorite photos. 
                    If you have any questions, we're always here to help.
                </p>
                <p>
                    Enjoy!
                </p>
            </Panel>
        </div>
    );
}

export default Welcome;
