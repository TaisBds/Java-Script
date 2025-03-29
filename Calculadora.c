#include<stdio.h>
#include"Calculadora2.h"


float soma(float nota1, float nota2){
	return nota1+nota2;
}
float divide(float nota3,float nota4){
	return nota3/nota4;
}
float diminui(float nota5, float nota6){
	return nota5-nota6;
}
float multiplica (float nota7,float nota8){
	return nota7 * nota8;
}
int main(){
float nota1, nota2;
float nota3, nota4;
float nota5, nota6;
float nota7, nota8;
		
int opcao;

 while(opcao!=5){
	
		printf("\nEscolha uma opção:\n");
        printf("1 - Soma.\n");
        printf("2 - Divide.\n");
        printf("3 - Diminui.\n");
        printf("4 - Multiplica.\n");
        printf("5 - Sair.\n");
        scanf("%i", &opcao);
		
	switch (opcao){
	
		case 1:
	printf("Digite nota 01: ");
	scanf("%f",&nota1);
	
	
	printf("Digite nota 02: ");
	scanf("%f",&nota2);

	
	
	printf("Soma: %2.f \n", soma(nota1,nota2));
		system("cls");
			
			
			break;
		;
		case 2:
			
	printf("Digite nota 01: ");
	scanf("%f",&nota3);
	
	
	printf("Digite nota 02: ");
	scanf("%f",&nota4);
	system("cls");
	
	if(nota6 != 0 ){
			printf("Divisão: %2.f \n", divide(nota3,nota4));
			break;
				system("cls");
	}else{
		printf("Resultado Inválido");
	};
	
		case 3:
	printf("Digite nota 01: ");
	scanf("%f",&nota5);
	
	
	printf("Digite nota 02: ");
	scanf("%f",&nota6);
	system("cls");
	
	
	printf("Sublitação: %2.f \n", diminui(nota5,nota6));
			break;
				system("cls");
		;
		case 4:
	printf("Digite nota 01: ");
	scanf("%f",&nota7);
	
	
	printf("Digite nota 02: ");
	scanf("%f",&nota8);
	system("cls");
	
	
		if(nota8 != 0 ){
			printf("Divisão: %2.f \n", multiplica(nota7,nota8));
			break;
				system("cls");
	}else{
		printf("Resultado Inválido");
	};
			break;
		;
		case 5:
			printf("Saindo...");
			break;
				system("cls");
		default:
			
			printf("Digito invalido");
			break;
		};
} 
	
	

		
	};


