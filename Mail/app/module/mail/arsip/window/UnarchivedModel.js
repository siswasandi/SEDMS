Ext.define('Docs.view.arsip.window.UnarchivedModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.arsip-window-unarchived',
	stores:{
    	jra:{
            fields:[
                {name:'id',type:'auto'},
                {name:'kode',type:'auto'},
                {name:'klasifikasi',type:'auto'},
                {name:'active',type:'auto'},
                {name:'waktu_aktif',type:'auto'},
                {name:'waktu_inaktif',type:'auto'},
                {name:'keterangan',type:'auto'}
            ],
            autoLoad:true,
            pageSize:7,
            proxy:{
                type:'rest',
                /*extraParams:{
                  primer : '{primer_code}'
                },*/
                api: {
                        create  : serverURL+'referensi/jra',
                        update  : serverURL+'referensi/jra',
                        destroy : serverURL+'referensi/jra'
                },        
                url: serverURL+'referensi/jra.json',
                reader: {
                      type: 'json',
                      rootProperty: 'data',
                      totalProperty: 'total'
                },
                writer: {
                      //encode: true,
                      type: 'json',
                      rootProperty: 'data'
                }
            }
        },
        daftar_riwayat:{
    		fields: [ 		
                {name: 'id', type:'auto'},
                {name: 'tanggal', type:'auto'},
                {name: 'uniquecode', type:'auto'},
                {name: 'aksi', type:'auto'}

            ],
            autoLoad:true,
            pageSize:10,
            proxy: {
                type: 'rest',
                extraParams:{
	            	uniquecode:'{uniquecode}'
	            },
                timeout: 20000000,
                api: {
                        create  : serverURL+'riwayat/daftar',
                        update  : serverURL+'riwayat/daftar',
                        destroy : serverURL+'riwayat/daftar'
                },        
                url: serverURL+'riwayat/daftar.json',
                reader: {
                      type: 'json',
                      rootProperty: 'data',
                      totalProperty: 'total'
                },
                writer: {
                      //encode: true,
                      type: 'json',
                      rootProperty: 'data'
                }
             }
    	},
    	file: {
            pageSize:5,
            autoLoad:true,
            fields: [
                {name: 'id', type:'string'}, 
                {name: 'tu_surat_id', type:'string'},  
                {name: 'nama_file', type:'string'},  
                {name: 'stored', type:'string'},  
                {name: 'key', type:'string'},  
                {name: 'id_pengguna', type:'string'},  
                {name: 'lokasi', type:'string'},  
               
                {name: 'created_at', type:'date'},  
                {name: 'created_by', type:'string'},  
                {name: 'edited_at', type:'date'},  
                {name: 'edited_by', type:'string'},  
                {name: 'deleted_at', type:'date'},  
                {name: 'deleted_by', type:'string'}
            ],

            proxy: {
                type: 'rest',
                timeout: 20000000,
                extraParams:{
                    uniquecode:'{uniquecode}'
                },
                api: {
                        create  : serverURL+'notadinas/file',
                        update  : serverURL+'notadinas/file',
                        destroy : serverURL+'notadinas/file'
                },        
                url: serverURL+'notadinas/file.json',
                reader: {
                      type: 'json',
                      rootProperty: 'data',
                      totalProperty: 'total'
                },
                writer: {
                      //encode: true,
                      type: 'json',
                      rootProperty: 'data'
                }
            }
        }
    }

});