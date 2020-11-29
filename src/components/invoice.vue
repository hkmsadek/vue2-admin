<template>
    <div>
        <div class="_main_content">
            <div class="_1card">
                <div class="_1card_body">
                    <!-- <h2 class="_1card_title">Invoice one</h2> -->

                    <div class="_invoice">
                        <div class="_invoice_top">
                            <p class="_invoice_title">Invoice</p>
                            <p class="_invoice_num">#34445998</p>
                        </div>

                        <div class="_invoice_address_date">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_invoice_address">
                                        <h2 class="_invoice_to">Invoiced to</h2>
                                        <h4 class="_invoice_name">William T. Smith</h4>
                                        <p class="_invoice_house">9172 West Bay Meadows Street<br/>Pickerington<br/>OH 43147</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_invoice_date">
                                        <p class="_invoice_date_text">Invoice Date : sat 18-07-2019</p>
                                        <p class="_invoice_date_text">Due Date : sat 18-07-2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_invoice_table _table_responsive">
                            <table class="_table_invoice">
                                <thead>
                                    <tr>
                                        <th class="_text_center">Id</th>
                                        <th class="_text_left">Description</th>
                                        <th class="_text_center">Qty</th>
                                        <th>Unit Cost</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(item, index) in invoiceData" :key="index">
                                        <td class="_text_center">{{ index+1 }}</td>
                                        <td class="_text_left">{{ item.description }}</td>
                                        <td class="_text_center">{{ item.qty }}</td>
                                        <td>{{ item.unitCost}}</td>
                                        <td>{{ item.qty*item.unitCost }}</td>
                                    </tr>
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <td class="_font_w" colspan="4"><strong>TOTAL BALANCE :</strong></td>
                                        <td class="_font_w"><strong>$140</strong></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div class="_invoice_buttons">
                            <Button type="primary" size="large">Print Invoice</Button>
                            <Button class="_mar_l10" size="large">Send Invoice</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            invoiceData: [
                {
                    description: 'New York No. 1 Lake Park',
                    qty: '03',
                    unitCost: '55'	
                },
                {
                    description: 'Crazy Toys',
                    qty: '01',
                    unitCost: '144'
                },
                {
                    description: 'New York No. 1 Lake Park',
                    qty: '05',
                    unitCost: '44'
                },
                {
                    description: 'Beautiful flowers',
                    qty: '01',
                    unitCost: '14'
                },
                {
                    description: 'New York No. 1 Lake Park',
                    qty: '43',
                    unitCost: '4'
                },
                {
                    description: 'Beautiful flowers',
                    qty: '13',
                    unitCost: '24'
                }
            ]
        }
    }
}
</script>