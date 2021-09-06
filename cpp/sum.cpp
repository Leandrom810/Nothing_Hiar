#include <iostream>
template <typename V1, typename V2>
V1 maior(V1 a, V2 b) {
	return(a > b ? a : b);
}

int main() {
	double va1, va2;
	std::cout << "Vai logo meu -> ";
	std::cin >> va1 >> va2;
	std::cout << "O maior numero é: " << maior(va1, va2) << std::endl;
	return 0;
}
