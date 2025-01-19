var wms_layers = [];
var format_jalan_0 = new ol.format.GeoJSON();
var features_jalan_0 = format_jalan_0.readFeatures(json_jalan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_0.addFeatures(features_jalan_0);var lyr_jalan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_0, 
                style: style_jalan_0,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_0_0.png" /> jalan lokal<br />\
    <img src="styles/legend/jalan_0_1.png" /> jalan provinsi<br />\
    <img src="styles/legend/jalan_0_2.png" /> <br />'
        });var format_sungai_1 = new ol.format.GeoJSON();
var features_sungai_1 = format_sungai_1.readFeatures(json_sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sungai_1.addFeatures(features_sungai_1);var lyr_sungai_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_1, 
                style: style_sungai_1,
                title: '<img src="styles/legend/sungai_1.png" /> sungai'
            });var format_DesaIndonesia_2 = new ol.format.GeoJSON();
var features_DesaIndonesia_2 = format_DesaIndonesia_2.readFeatures(json_DesaIndonesia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_2.addFeatures(features_DesaIndonesia_2);var lyr_DesaIndonesia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_2, 
                style: style_DesaIndonesia_2,
                title: '<img src="styles/legend/DesaIndonesia_2.png" /> DesaIndonesia'
            });var format_DESAMORELLA_3 = new ol.format.GeoJSON();
var features_DESAMORELLA_3 = format_DESAMORELLA_3.readFeatures(json_DESAMORELLA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESAMORELLA_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DESAMORELLA_3.addFeatures(features_DESAMORELLA_3);var lyr_DESAMORELLA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESAMORELLA_3, 
                style: style_DESAMORELLA_3,
                title: '<img src="styles/legend/DESAMORELLA_3.png" /> DESA MORELLA'
            });var format_rumah_4 = new ol.format.GeoJSON();
var features_rumah_4 = format_rumah_4.readFeatures(json_rumah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah_4.addFeatures(features_rumah_4);var lyr_rumah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumah_4, 
                style: style_rumah_4,
    title: 'rumah<br />\
    <img src="styles/legend/rumah_4_0.png" /> kantor desa morella<br />\
    <img src="styles/legend/rumah_4_1.png" /> rumah warga<br />\
    <img src="styles/legend/rumah_4_2.png" /> rumah wargaL<br />\
    <img src="styles/legend/rumah_4_3.png" /> <br />'
        });

lyr_jalan_0.setVisible(true);lyr_sungai_1.setVisible(true);lyr_DesaIndonesia_2.setVisible(true);lyr_DESAMORELLA_3.setVisible(true);lyr_rumah_4.setVisible(true);
var layersList = [lyr_jalan_0,lyr_sungai_1,lyr_DesaIndonesia_2,lyr_DESAMORELLA_3,lyr_rumah_4];
lyr_jalan_0.set('fieldAliases', {'id': 'id', 'jalan': 'jalan', });
lyr_sungai_1.set('fieldAliases', {'id': 'id', 'sungai': 'sungai', });
lyr_DesaIndonesia_2.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_DESAMORELLA_3.set('fieldAliases', {'NO': 'NO', 'EAST (E/X)': 'EAST (E/X)', 'SOUTH (S/Y)': 'SOUTH (S/Y)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KET': 'KET', });
lyr_rumah_4.set('fieldAliases', {'id': 'id', 'rumah': 'rumah', 'foto': 'foto', });
lyr_jalan_0.set('fieldImages', {'id': 'TextEdit', 'jalan': 'TextEdit', });
lyr_sungai_1.set('fieldImages', {'id': 'TextEdit', 'sungai': 'TextEdit', });
lyr_DesaIndonesia_2.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_DESAMORELLA_3.set('fieldImages', {'NO': 'TextEdit', 'EAST (E/X)': 'TextEdit', 'SOUTH (S/Y)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KET': 'TextEdit', });
lyr_rumah_4.set('fieldImages', {'id': 'TextEdit', 'rumah': 'TextEdit', 'foto': 'Photo', });
lyr_jalan_0.set('fieldLabels', {'id': 'no label', 'jalan': 'inline label', });
lyr_sungai_1.set('fieldLabels', {'id': 'no label', 'sungai': 'no label', });
lyr_DesaIndonesia_2.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_DESAMORELLA_3.set('fieldLabels', {'NO': 'no label', 'EAST (E/X)': 'no label', 'SOUTH (S/Y)': 'no label', 'NAMA TEMPAT': 'no label', 'KET': 'no label', });
lyr_rumah_4.set('fieldLabels', {'id': 'no label', 'rumah': 'no label', 'foto': 'no label', });
lyr_rumah_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});