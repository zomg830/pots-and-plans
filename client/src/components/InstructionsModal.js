import React from "react";

function InstructionsModal() {
    return (
        <div className="container">
            {/* // <!-- Button trigger modal --> */}
            <button id="instructions" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Instructions
            </button>

            {/* // <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">Build your restaurant from scratch!</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>You can run a successful food establishment!</p>
                    <p>Be confident & Take risks!</p>
                    <ul>
                        <li>Your goal is to keep your business afloat long enough to break even and make profit.</li>
                        <li>Develop a realistic business plan based on your initial amount/balance.</li>
                        <li>Select your service style & restaurant floor plan (ice-box)</li>
                        <li>Choose your restaurant Name.</li>
                        <li>Hire staff.</li>
                        <li>Keep track of your restaurant's inventory</li>
                        <li>Do aggressive promotion or rely solely on word-of-mouth.</li>
                    </ul>
                    <p>Best Wishes to you on your New Venture!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default InstructionsModal;