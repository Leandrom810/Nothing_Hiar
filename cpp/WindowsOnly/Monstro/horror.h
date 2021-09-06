#include <iostream>

class lenux {
	

public:
	lenux(int ver, std::string funfa, double finished);
	int getVer() { return ver; }
	std::string getFunfa() { return funfa; }
	double getFinished() { return finished; }
private:
	int ver;
	std::string funfa;
	double finished;
};
lenux::lenux(int ver, std::string funfa, double finished) {
	this->ver = ver; this->funfa = funfa; this->finished = finished;
}