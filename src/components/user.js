import React from 'react';
import ReactDOM from 'react-dom';
// import { ReactComponent } from '*.svg';
import $ from 'jquery';
import axios from 'axios';


class listUser  {
                    // var res = axios.get("http://localhost:5000/api/test")
                    // console.log(res);
                    componentDidMount(){
                        $.ajax({
                            url: "http://localhost:5000/api/test",
                            dataType: "json",
                            success: function(response){
                                // debugger;
                                $.each(response.details,function(i, detail){  
                                    var listPeople = 
                                        `<h4 id=${detail.id} class="text-center text-uppercase text-primary font-weight-bold font-size-5 explore">${detail.name} ${detail.otherName}</h4>
                                        <section class="font-weight-bold">
                                        <p><span>${detail.id}. </span>${detail.name} ${detail.otherName} lives in ${detail.Location}.</p>
                                        <p>He work as a ${detail.job} at so so so, in the department of ${detail.department}.
                                        <p> He uses the ${detail.stack} as his primary stack. blah blah blah<br>
                                        </section>`
                                        // <button class="btn btn-primary mt-2 explore">Read More</button>
                                        
                                    $(".q2").append(listPeople);
                                });
                            }
                        });
                    
                        $(document).on("click", ".explore", function(){
                            // console.log(id);
                            var id = $(this).attr("id");
                            // console.log(id);
                            
                            
                            $.ajax({
                                url: "http://localhost:5000/api/test",
                                dataType: "json",
                                success: function(response) {
                                    var selectedPerson = $.grep(response.details, function(detail){
                                        return detail.id == id;
                                        
                                    })
                                    // console.log(selectedPerson);
                                    
                                    var address = selectedPerson[0].name;
                                    var address1 = selectedPerson[0].otherName;
                                    var searchAddress = address + " " + address1
                                    // console.log(searchAddress);
                                    
                                    window.open(`https://www.google.com/search?q=${searchAddress}`);
                                },
                                error: function(error) {
                                    console.log(error);
                                    
                                }
                            });
                        });
                    }
};

export default listUser;