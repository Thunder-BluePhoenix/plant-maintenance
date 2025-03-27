// Copyright (c) 2024, Rahul Sarkar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Plant", {
	onload:function(frm) {
        let account_type = ["Tax", "Chargeable", "Income Account", "Expenses Included In Valuation", "Expenses Included In Asset Valuation"]
        frm.set_query("machine_cost_account", function(){
            return{
                filters:{
                    company:frm.doc.company,
                    account_type:  ["in", account_type]
                }
            }
        })
        frm.set_query("labour_cost_account", function(){
            return{
                filters:{
                    company:frm.doc.company,
                    account_type: ["in", account_type]
                }
            }
        })
        frm.set_query("over_heads_cost_account", function(){
            return{
                filters:{
                    company:frm.doc.company,
                    account_type: ["in", account_type]
                }
            }
        })
	},
});
//test