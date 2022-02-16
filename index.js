$(document).ready(function(){
        $("p.naranja").click(function(){
            $(this).toggleClass("naranja").toggleClass("rojo")
        });
        
        $("button.ponerRojo").click(function(){
            $("p.naranja").removeClass("naranja").addClass("rojo");
        });

        $("button.ponerNaranja").click(function(){
            $("p.rojo").removeClass("rojo").addClass("naranja");
        });

        $(".btnCopiar").click(function(){
            let value = $("#copiar").val();
            $("#copiado").val(value);
        });

        $(".btnRemplazar").click(function(){
            let valor = $("#tabla").val();
            $("p.remplazo").text(valor);
            $("#tabla").val('');
        });

        $(".btnAnadir").click(function(){
            let valor2 = $("#tabla").val();
            $("p.remplazo").append(` ${valor2}`);
            $("#tabla").val('');
        });

        $(".btnResta").click(function(){
            let cantidad = ($("#numero").val()-1);
            if(cantidad < 0){
                return;
            }
            $("#numero").val(cantidad);
        })
        
        $(".btnSuma").click(function(){
            let cantidad2 = parseInt($("#numero").val())+1;
            if(cantidad2 > 10){
                return;
            }
            $("#numero").val(cantidad2);
        })

        $("#next").click(function(){
            let nuevaPag = parseInt($("#pag5").text())+1;
            if(nuevaPag>20){
                return;
            }
            $("#pag5").text(nuevaPag);
            $("#pag4").text(nuevaPag-1);
            $("#pag3").text(nuevaPag-2);
            $("#pag2").text(nuevaPag-3);
            $("#pag1").text(nuevaPag-4);
        })

        $("#antes").click(function(){
            let pagAnterior = $("#pag1").text()-1;
            if(pagAnterior < 1){
                return;
            }
            $("#pag1").text(pagAnterior);
            parseInt($("#pag2").text(pagAnterior+1));
            parseInt($("#pag3").text(pagAnterior+2));
            parseInt($("#pag4").text(pagAnterior+3));
            parseInt($("#pag5").text(pagAnterior+4));
        })

        $("#pag1").click(function(){
            alert ('Estas en la página 1')
        })

        $("#pag2").click(function(){
            alert ('Estas en la página 2')
        })
        
        $("#pag3").click(function(){
            alert ('Estas en la página 3')
        })
})

